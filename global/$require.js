'use strict';

let pathFromRoot = require('./pathFromRoot');

let path = require('path');
let joinPath = path.join;

module.exports = function() {
    return require(pathFromRoot(joinPath.apply(null, arguments)));
};
