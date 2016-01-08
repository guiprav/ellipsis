'use strict';

let app = require('../app');

let templ = require('../templ');

let loadPost = require('../mod/post/load');

app.param('postId', function(req, res, next, id) {
    let post = req.post = loadPost(id);

    if(!post) {
        res.send(templ.e404(req));
        return;
    }

    next();
});

app.get('/post/:postId', function(req, res) {
    res.redirect(301, req.post.url);
});

app.get('/post/:postId/:slug', function(req, res) {
    if(req.params.slug !== req.post.slug) {
        res.redirect(301, req.post.url);
        return;
    }

    res.send(templ.post(req.post));
});
