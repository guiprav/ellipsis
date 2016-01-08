'use strict';

let md = require('marked');

module.exports = function(text) {
    return md(text);
};
