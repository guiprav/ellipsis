'use strict';

let load = require('load');

let glob = require('glob');

module.exports = function(dir, rootObj) {
    if(rootObj === undefined) {
        rootObj = {};
    }

    load.tree(glob.sync(dir + '/**/*', { nodir: true }), {
        baseDir: dir,
        rootObj,
    });

    return rootObj;
};
