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
var testUtils = require('../util/util');
var isForceMocked = !process.env.NOCK_OFF;

var utils = require('../../lib/util/utils');
var CLITest = require('../framework/cli-test');

var vmPrefix = 'clitestvm';
var location = process.env.AZURE_VM_TEST_LOCATION || 'West US';
var suite;
var testPrefix = 'cli.vm.negative-tests';

var currentRandom = 0;

describe('cli', function () {
  describe('vm', function () {
    var vmName = 'xplattestvm';

    before(function (done) {
      suite = new CLITest(testPrefix, isForceMocked);

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
      }
      suite.teardownSuite(done);
    });

    beforeEach(function (done) {
      suite.setupTest(done);
    });

    afterEach(function (done) {
      suite.teardownTest(done);
    });

    // Negative Test Case by specifying VM Name Twice
    it('Negavtive test case by specifying Vm Name Twice', function (done) {
      var vmNegName = 'xplattestvm';
	  var location = process.env.AZURE_VM_TEST_LOCATION || 'West US';
	  getImageName('Linux', function (ImageName) {
      suite.execute('vm create %s %s "azureuser" "Pa$$word@123" --json --location %s',
        vmNegName, ImageName, location, function (result) { 
          result.exitStatus.should.equal(1);
          result.errorText.should.include(' A VM with dns prefix "xplattestvm" already exists');
          return done();
        });
	  });
    });
 	
	// Negative Test Case by specifying invalid Password
    it('Negative test case for password', function (done) {
      var vmNegName = 'TestImg';
      getImageName('Linux', function (ImageName) {
        var location = process.env.AZURE_VM_TEST_LOCATION || 'West US'; ;

        suite.execute('vm create %s %s "azureuser" "Coll" --json --location %s',
          vmNegName, ImageName, location, function (result) {
          result.exitStatus.should.equal(1);
          result.errorText.should.include('password must be at least 8 character in length, it must contain a lower case, an upper case, a number and a special character such as !@#$%^&+=');
          done();
        });
      });
    });

    // Negative Test Case for Vm Create with Invalid Name
    it('Negative Test Case for Vm Create with Invalid name', function (done) {
      var vmNegName = 'test1@1';
	  var location = process.env.AZURE_VM_TEST_LOCATION || 'West US';
	  getImageName('Linux', function (ImageName) {
      suite.execute('vm create %s %s "azureuser" "Pa$$word@123" --json --location %s',
        vmNegName, ImageName, location, function (result) {
          // check the error code for error
          result.exitStatus.should.equal(1);
          result.errorText.should.include('The hosted service name is invalid.');
          done();
        });
	  });
    });

    // Negative Test Case by specifying invalid Location
    it('Negative Test Case for Vm create Location', function (done) {
      var vmNegName = 'newTestImg';
      getImageName('Linux', function (ImageName) {
        suite.execute('vm create %s %s "azureuser" "Pa$$word@123" --json --location %s',
          vmNegName, ImageName, 'SomeLoc', function (result) {
          result.exitStatus.should.equal(1);
          result.errorText.should.include(' No location found which has DisplayName or Name same as value of --location');
          done();
        });
      });
    });  

   // Create VM with custom data with large file as customdata file
     it('negetive testcase for custom data - Large File', function (done) {
      var customVmName = vmName + 'customdatalargefile';
      var fileName = 'customdatalargefile';
	  var location = process.env.AZURE_VM_TEST_LOCATION || 'West US';
	  vmsize = 'small',
      sshPort = '223';
      generateFile(fileName, 70000, null);
	  getImageName('Linux', function (ImageName) {
      suite.execute('vm create -e %s -z %s --no-ssh-password %s %s testuser Collabera@01 -l %s -d %s --json --verbose',
        sshPort, vmsize, customVmName, ImageName, location, fileName, function (result) { 
          result.exitStatus.should.equal(1);
          result.errorText.should.include('Input custom data file exceeded the maximum length of 65535 bytes');
          fs.unlink(fileName, function (err) {
            if (err)
              throw err;
            return done();
          });
        });
	  });
    }); 

    // Get name of an image of the given category
    function getImageName(category, callBack) {
      if (getImageName.imageName) {
        callBack(getImageName.imageName);
      } else { //var vmImgName;
        suite.execute('vm image list --json', function (result) {
          var imageList = JSON.parse(result.text);
          imageList.some(function (image) { //console.log(image);
            if (image.operatingSystemType.toLowerCase() === category.toLowerCase() && image.category.toLowerCase() === 'public') {
              getImageName.imageName = image.name;
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
