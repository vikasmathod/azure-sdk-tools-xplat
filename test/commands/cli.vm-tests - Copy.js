/**
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

var should = require('should');
var sinon = require('sinon');
var util = require('util');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');

var utils = require('../../lib/util/utils');
var testUtils = require('../util/util');
var CLITest = require('../framework/cli-test');

var communityImageId = process.env['AZURE_COMMUNITY_IMAGE_ID'];
var storageAccountKey = process.env['AZURE_STORAGE_ACCOUNT'] ? process.env['AZURE_STORAGE_ACCOUNT'] : 'YW55IGNhcm5hbCBwbGVhc3VyZQ==';
var createdDisks = [];

// A common VM used by multiple tests
var vmToUse = {
  Name: null,
  Created: false,
  Delete: false
};

var vmPrefix = 'clitestvm';
var vmNames = [];

var suite;
var testPrefix = 'cli.vm-tests';

var currentRandom = 0;

describe('cli', function () {
  describe('vm', function () {
    var vmImgName = 'xplattestimg';
    var vmName = 'xplattestvm';
    var vnetName = 'xplattestvnet';
    var diskName = 'xplattestdisk';
    var affinityName = 'xplattestaffingrp';
    var vnetVmName = 'xplattestvmVnet';
    var diskSourcePath,
      domainUrl,
      imageSourcePath,
      location;

    before(function (done) {
      suite = new CLITest(testPrefix, true);

      if (suite.isMocked) {
        sinon.stub(crypto, 'randomBytes', function () {
          return (++currentRandom).toString();
        });

        utils.POLL_REQUEST_INTERVAL = 0;
      }

      suite.setupSuite(done);
    });

    after(function (done) {
      if (suite.isMocked) {
        crypto.randomBytes.restore();
        suite.teardownSuite(done);
      } else {
        (function deleteUsedDisk() {
          if (createdDisks.length > 0) {
            var diskName = createdDisks.pop();
            suite.execute('vm disk delete -b %s --json', diskName, function () {
              deleteUsedDisk();
            });
          } else {
            suite.teardownSuite(done);
          }
        })();
      }
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      function deleteUsedVM(vm, callback) {
        if (vm.Created && vm.Delete) {
          suite.execute('vm delete %s -b --json --quiet', vm.Name, function () {
            vm.Name = null;
            vm.Created = vm.Delete = false;
            return callback();
          });
        } else {
          return callback();
        }
      }

      deleteUsedVM(vmToUse, function () {
        suite.teardownTest(done);
      });
    });


    // Negative Test Case by specifying VM Name Twice
    it('Negavtive test case by specifying Vm Name Twice', function (done) {
      var vmNegName = 'xplattestvm';
      suite.execute('vm create %s %s "azureuser" "Pa$$word@123" --json --location %s',
        vmNegName, vmImgName, location, function (result) {
          result.exitStatus.should.equal(1);
          result.errorText.should.include(' A VM with dns prefix "xplattestvm" already exists');
          return done();
        });
    });

    


    // Get name of an image of the given category
    function getImageName(category, callBack) {
      if (getImageName.imageName) {
        callBack(getImageName.imageName);
      } else {
        suite.execute('vm image list --json', function (result) {
          var imageList = JSON.parse(result.text);
          imageList.some(function (image) {
            if (image.Category.toLowerCase() === category.toLowerCase()) {
              getImageName.imageName = image.Name;
            }
          });

          callBack(getImageName.imageName);
        });
      }
    }

    // Create a VM to be used by multiple tests (this will be useful when we add more tests
    // for endpoint create/delete/update, vm create -c.
    function getSharedVM(callBack) {
      if (vmToUse.Created) {
        return callBack(vmToUse);
      } else {
        getImageName('Microsoft Corporation', function (imageName) {
          var name = suite.generateId(vmPrefix, vmNames);
          suite.execute('vm create %s %s azureuser PassW0rd$ --ssh --json --location %s',
            name,
            imageName,
            location,
            function (result) {

              vmToUse.Created = (result.exitStatus === 0);
              vmToUse.Name = vmToUse.Created ? name : null;
              suite.execute('vm show %s --json', name, function (result) {
                var vmObj = JSON.parse(result.text);
                createdDisks.push(vmObj.OSDisk.DiskName);
                return callBack(vmToUse);
              });
            });
        });
      }
    }

    //create a file and write desired data given as input
    function generateFile(filename, fileSizeinBytes, data) {
      if (fileSizeinBytes)
        data = testUtils.generateRandomString(fileSizeinBytes);
      fs.writeFileSync(filename, data);
    }
  });
});