'use strict';

let glob = require('glob');

glob.sync(__dirname + '/**/*.js').forEach(function(file) {
    require(file);
});
