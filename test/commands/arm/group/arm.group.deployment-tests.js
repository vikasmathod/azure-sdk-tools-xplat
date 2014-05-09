﻿/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var should = require('should');

var util = require('util');
var fs = require('fs');
var path = require('path');
var profile = require('../../../../lib/util/profile');
var CLITest = require('../../../framework/arm-cli-test');


var testStorageAccount = process.env['AZURE_ARM_TEST_STORAGEACCOUNT'];
var testLocation = process.env['AZURE_ARM_TEST_LOCATION'];

var normalizedTestLocation = testLocation.toLowerCase().replace(/ /g, '');
var testprefix = 'arm-cli-deployment-tests';
var galleryTemplate = 'Microsoft.ASPNETStarterSite.0.1.0-preview1';
var createdGroups = [];
var createdDeployments = [];
var cleanedUpGroups = 0;

describe('arm', function () {
  describe('deployment', function () {
    var suite;

    before(function (done) {
      suite = new CLITest(testprefix);
      suite.setupSuite(done);
    });

    after(function (done) {
      suite.teardownSuite(done);
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    function cleanup(done) {
      function deleteGroups(index, callback) {
        if (index === createdGroups.length) {
          return callback();
        }
        suite.execute('group delete %s --quiet -vv', createdGroups[index], function () {
          deleteGroups(index + 1, callback);
        });
      }

      deleteGroups(cleanedUpGroups, function () {
        cleanedUpGroups = createdGroups.length;
        done();
      });
    }

    describe('list and show', function () {
      it('should all work with switches', function (done) {
        var deploymentState = 'Accepted';
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = 'https://testtemplates.blob.core.windows.net/templates/good-website.js';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -n %s -e %s --json -vv',
            templateFile, groupName, deploymentName, parameterFile);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s --json', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s --state %s --json', groupName, deploymentState, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                cleanup(done);
              });
            });
          });
        });
      });

      it('should all work without switches', function (done) {
        var deploymentState = 'Accepted';
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = 'https://testtemplates.blob.core.windows.net/templates/good-website.js';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -n %s -e %s --json -vv',
            templateFile, groupName, deploymentName, parameterFile);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show %s %s --json', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list %s %s --json', groupName, deploymentState, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                cleanup(done);
              });
            });
          });
        });
      });
    });

    describe('stop', function () {
      it('should work', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateUri = 'https://testtemplates.blob.core.windows.net/templates/good-website.js';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -n %s -e %s --json -vv',
            templateUri, groupName, deploymentName, parameterFile);

        suite.execute('group create %s %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment stop -g %s -n %s -q --json', groupName, deploymentName, function (listResult) {
              listResult.exitStatus.should.equal(0);

              cleanup(done);
            });
          });
        });
      });

      it('should stop the currently running deployment when deployment name is not provided and only 1 deployment is currently running', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateUri = 'https://testtemplates.blob.core.windows.net/templates/good-website.js';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -n %s -e %s --json -vv',
            templateUri, groupName, deploymentName, parameterFile);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment stop -g %s -q --json', groupName, function (listResult) {
              listResult.exitStatus.should.equal(0);

              cleanup(done);
            });
          });
        });
      });

      it('should fail when the deployment name is not provided and more than 1 deployment is currently running', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var deploymentName1 = suite.generateId('Deploy2', createdDeployments, suite.isMocked);
        var templateUri = 'https://testtemplates.blob.core.windows.net/templates/good-website.js';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -n %s -e %s --json -vv',
            templateUri, groupName, deploymentName, parameterFile);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);
            suite.execute('group deployment create -f %s -g %s -n %s -e %s --json -vv', templateUri, groupName, deploymentName1, parameterFile, function (result2) {
              result2.exitStatus.should.equal(0);
              suite.execute('group deployment stop -g %s -q --json', groupName, function (listResult) {
                listResult.exitStatus.should.equal(1);
                listResult.errorText.should.include('There are more than 1 deployment in either "Running" or "Accepted" state, please name one.');
                cleanup(done);
              });
            });
          });
        });
      });
    });

    describe('create', function () {
      it('should work with a remote file', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateUri = 'https://testtemplates.blob.core.windows.net/templates/good-website.js';
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -n %s -e %s -s %s --json -vv',
            templateUri, groupName, deploymentName, parameterFile, testStorageAccount);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment stop -g %s -n %s -q --json', groupName, deploymentName, function (listResult) {
              listResult.exitStatus.should.equal(0);

              cleanup(done);
            });
          });
        });
      });

      it('should all work with a local file', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = path.join(__dirname, '../../../data/arm-deployment-template.json');
        var commandToCreateDeployment = util.format('group deployment create -f %s -g %s -n %s -e %s -s %s --json -vv',
            templateFile, groupName, deploymentName, parameterFile, testStorageAccount);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s --json', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s --json', groupName, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                cleanup(done);
              });
            });
          });
        });
      });

      it('should all work with a string for parameters', function (done) {
        var parameters = fs.readFileSync(path.join(__dirname, '../../../data/arm-deployment-parameters.json')).toString().replace(/\n/g, '').replace(/\r/g, '');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = path.join(__dirname, '../../../data/arm-deployment-template.json');

        parameters = JSON.stringify(JSON.parse(parameters));

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute('group deployment create -f %s -g %s -n %s -s %s -p %s --json -vv',
            templateFile, groupName, deploymentName, testStorageAccount, parameters, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s --json', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s --json', groupName, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                cleanup(done);
              });
            });
          });
        });
      });

      it('should all work with a gallery template and a string for parameters', function (done) {
        var parameters = fs.readFileSync(path.join(__dirname, '../../../data/startersite-parameters.json')).toString().replace(/\n/g, '').replace(/\r/g, '');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);

        suite.execute('group create %s --location %s --quiet --json', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute('group deployment create -y %s -g %s -n %s -p %s --json -vv',
            galleryTemplate, groupName, deploymentName, parameters, function (result) {
            result.exitStatus.should.equal(0);

            suite.execute('group deployment show -g %s -n %s --json', groupName, deploymentName, function (showResult) {
              showResult.exitStatus.should.equal(0);
              showResult.text.indexOf(deploymentName).should.be.above(-1);

              suite.execute('group deployment list -g %s --json', groupName, function (listResult) {
                listResult.exitStatus.should.equal(0);
                listResult.text.indexOf(deploymentName).should.be.above(-1);
                cleanup(done);
              });
            });
          });
        });
      });

      it('should fail when both gallery template and file template are provided', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var templateFile = path.join(__dirname, '../../../data/arm-deployment-template.json');
        var commandToCreateDeployment = util.format('group deployment create -f %s -y %s -g %s -n %s -e %s -s %s --json',
            templateFile, galleryTemplate, groupName, deploymentName, parameterFile, testStorageAccount);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(1);
            result.errorText.should.include('Specify exactly one of the --gallery-template, --template-file, or template-uri options.');
            cleanup(done);
          });
        });
      });

      it('should fail when an incorrect gallery template is provided', function (done) {
        var parameterFile = path.join(__dirname, '../../../data/arm-deployment-parameters.json');
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);
        var galleryTemplate = 'Microsoft.ASPNETStarterSite.0.1.0-preview101ABC';
        var commandToCreateDeployment = util.format('group deployment create -y %s -g %s -n %s -e %s --json',
            galleryTemplate, groupName, deploymentName, parameterFile);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute(commandToCreateDeployment, function (result) {
            result.exitStatus.should.equal(1);
            result.errorText.should.include('Gallery item \'Microsoft.ASPNETStarterSite.0.1.0-preview101ABC\' was not found.');
            cleanup(done);
          });
        });
      });

      it('should fail when a parameter is missing for a deployment template', function (done) {
        var parameterString = "{ \"siteName\":{\"value\":\"xDeploymentTestSite1\"}, \"hostingPlanName\":{ \"value\":\"xDeploymentTestHost1\" }, \"sku\":{ \"value\":\"Free\" }, \"workerSize\":{ \"value\":\"0\" }}";
        var groupName = suite.generateId('xDeploymentTestGroup', createdGroups, suite.isMocked);
        var deploymentName = suite.generateId('Deploy1', createdDeployments, suite.isMocked);

        suite.execute('group create %s --location %s --json --quiet', groupName, testLocation, function (result) {
          result.exitStatus.should.equal(0);
          suite.execute('group deployment create -y %s -g %s -n %s -p %s --json', galleryTemplate, groupName, deploymentName, parameterString, function (result) {
            result.exitStatus.should.equal(1);
            result.errorText.should.include('Deployment template validation failed: \'The value for the template parameter \'siteLocation\' is not provided.\'.');
            cleanup(done);
          });
        });
      });
    });
  });
});