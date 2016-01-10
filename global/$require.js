'use strict';

let fs = require('fs');

let path = require('path');
let joinPath = path.join;

let pathFromRoot = require('./pathFromRoot');

let loadTree = require('../mod/loadTree');

module.exports = function() {
    let path = pathFromRoot(joinPath.apply(null, arguments));

    try {
        if(fs.statSync(path).isDirectory() && !fs.existsSync(path + '/index.js')) {
            return loadTree(path);
        }
    }
    catch(error) {
        if(error.code !== 'ENOENT') {
            throw error;
        }
    }

    return require(path);
};
