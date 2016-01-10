'use strict';

let load = require('load');

let yaml = require('yaml-js');

let readTextFileSync = require('read-text-file-sync');

load.byExt.yml = load.byExt.yaml = function(file) {
    return yaml.load(readTextFileSync(file));
};
