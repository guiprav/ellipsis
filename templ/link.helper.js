'use strict';

let hbs = require('handlebars');

let templ = $require('templ');

function maybeAddSpaces(val, spec) {
    if(!spec || !val) {
        return val;
    }

    if(!Array.isArray(spec)) {
        spec = spec.toString().split(' ');
    }

    if(spec.includes('before')) {
        val = ' ' + val;
    }

    if(spec.includes('after')) {
        val += ' ';
    }

    return val;
}

module.exports = function(label, options) {
    let href = options.hash.href;
    let space = options.hash.space;

    if(!href) {
        return maybeAddSpaces(label, space);
    }

    return new hbs.SafeString(maybeAddSpaces(
        '<a href="' + templ.escape(href) + '">' +
            templ.escape(label) +
        '</a>', space
    ));
};
