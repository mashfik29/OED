/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
This class uses the .xlsx file to add the meters and the first two elements that gets checked is the node and name.
 */

const path = require('path');
const { log } = require('../log');
const { insertMetersWrapper } = require('./readMamacMeters');

// Script to add meters from a .xlsx file
// The first two elements are 'node' and the name of the file. We only want arguments passed to it.
const args = process.argv.slice(2);
if (args.length !== 1) {
	log.error(`Expected one argument (path to csv file of meter ips), but got ${args.length} instead`, 'error');
} else {
	const absolutePath = path.resolve(args[0]);
	log.info(`Importing meters from ${absolutePath}`);
	insertMetersWrapper(absolutePath);
}

