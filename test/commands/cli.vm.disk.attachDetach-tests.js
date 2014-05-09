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

var isForceMocked = !process.env.NOCK_OFF;

var utils = require('../../lib/util/utils');
var CLITest = require('../framework/cli-test');

var vmPrefix = 'clitestvm';
var timeout = isForceMocked ? 0 : 5000;

var suite;
var testPrefix = 'cli.vm.disk.attachDetach-tests';

var currentRandom = 0;

describe('cli', function () {
  describe('vm', function () {
    var vmName = 'xplattestvm',
	diskName = 'xplattestdisk';
    
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

    describe('Disk:', function () {
      it('Attach & Detach', function (done) {
        suite.execute('vm disk attach %s %s --json', vmName, diskName, function (result) {
          suite.execute('vm show %s --json', vmName, function (result) { 
			
            var vmObj = JSON.parse(result.text);
			//console.log(vmObj);
            if (vmObj.DataDisks[0]) { 
/* 			  console.log(vmObj.DataDisks[0].name);
			  console.log('here');
			  console.log(diskName); */
              vmObj.DataDisks[0].name.should.equal(diskName);
              suite.execute('vm disk detach %s 0 --json', vmName, function (result) { 
			  console.log(result);
                result.exitStatus.should.equal(0);
                setTimeout(done, timeout);
              });
            } else
              done();
          });
        });
      });
    });
  });
});
