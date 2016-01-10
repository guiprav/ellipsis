'use strict';

let overloaded = require('overloaded');

let unindent = require('unindent');

let md = require('marked');

module.exports = function() {
    let args = overloaded(arguments, {
        1: ['options'],
        2: ['text', 'options']
    });

    if(!args.text) {
        args.text = args.options.fn(this);
    }

    return md(unindent(args.text));
};
