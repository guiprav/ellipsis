'use strict';

let load = require('load');

let glob = require('glob');

load.tree(glob.sync(__dirname + '/**/*', { nodir: true }), {
    baseDir: __dirname,
    rootObj: exports,
});

delete exports.index;
