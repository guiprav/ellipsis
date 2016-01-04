'use strict';

let readTextFileSync = require('read-text-file-sync');

let yaml = require('yaml-js');

module.exports = yaml.load(readTextFileSync(__dirname + '/conf.yml'));
