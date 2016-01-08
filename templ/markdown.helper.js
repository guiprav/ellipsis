'use strict';

let md = require('marked');

let overloaded = require('../mod/overloaded');

module.exports = function() {
    var args = overloaded(arguments, {
        1: ['options'],
        2: ['text', 'options']
    });

    if(!args.text) {
        args.text = args.options.fn(this);
    }

    return md(args.text);
};
