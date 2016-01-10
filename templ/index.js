'use strict';

let path = require('path');
let baseName = path.basename;

let readTextFileSync = require('read-text-file-sync');

let fm = require('front-matter');

let glob = require('glob');

let hbs = require('handlebars');

let data = $require('data');

glob.sync(__dirname + '/*.helper.js').forEach(function(file) {
    let name = baseName(file, '.helper.js');

    let helper = require(file);

    hbs.registerHelper(name, helper);
});

glob.sync(__dirname + '/*.partial.hbs').forEach(function(file) {
    let name = baseName(file, '.partial.hbs');

    let partial = readTextFileSync(file);

    hbs.registerPartial(name, partial);
});

glob.sync(__dirname + '/*.hbs').forEach(function(file) {
    if(file.endsWith('.partial.hbs')) {
        return;
    }

    let name = baseName(file, '.hbs');

    let templ = fm(readTextFileSync(file));

    Object.setPrototypeOf(templ.attributes, data);

    let compiledTempl = hbs.compile(templ.body);

    exports[name] = function(templData) {
        templData = templData || {};

        Object.setPrototypeOf(templData, templ.attributes);

        return compiledTempl(templData);
    };
});
