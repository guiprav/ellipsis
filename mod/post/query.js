'use strict';

let glob = require('glob');

let noExtBaseName = $require('mod/noExtBaseName');

let loadPost = $require('mod/post/load');

module.exports = function() {
    return (
        glob.sync(pathFromRoot('post/byId/*.md'))
            .map(function(path) {
                return loadPost(noExtBaseName(path));
            })
            .sort(function(a, b) {
                a = a.ctime.getTime();
                b = b.ctime.getTime();

                return (
                    a < b? 1 :
                    a > b? -1 :
                    0
                );
            })
    );
};
