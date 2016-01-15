'use strict';

let path = require('path');
let baseName = path.basename;
let extName = path.extname;

module.exports = function(path) {
    return baseName(path, extName(path));
};
