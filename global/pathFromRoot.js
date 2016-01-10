'use strict';

let path = require('path');
let joinPath = path.join;

module.exports = function() {
    return joinPath(__dirname, '..', joinPath.apply(null, arguments));
};
