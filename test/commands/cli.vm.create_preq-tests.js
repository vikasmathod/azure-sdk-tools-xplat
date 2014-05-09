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
var testPrefix = 'cli.vm.create_preq-tests';

var currentRandom = 0;

describe('cli', function () {
	describe('vm', function () {
		var vmName = 'xplattestvm',
		location = process.env.AZURE_VM_TEST_LOCATION || 'West US';

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

		describe('Create:', function () {
			it('Pre-requisite', function (done) {
				getImageName('Linux', function (ImageName) {
					suite.execute('vm create -l %s %s %s "azureuser" "Pa$$word@123" --json', location, vmName, ImageName, function (result) {
						result.exitStatus.should.equal(0);
						setTimeout(done, timeout);
					});
				});
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
						if (image.operatingSystemType.toLowerCase() === category.toLowerCase() && image.category.toLowerCase() === 'public') {
							vmImgName = image.name;
						}
					});
					callBack(vmImgName);
				});
			}
		}
	});
});
