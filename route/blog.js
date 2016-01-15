'use strict';

let app = $require('mod/app');

let templ = $require('templ');

let queryPosts = $require('mod/post/query');

app.get('/blog', function(req, res) {
    res.send(templ.blog({
        blogPosts: queryPosts(),
    }));
});
