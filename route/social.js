'use strict';

let app = $require('mod/app');

let templ = $require('templ');

app.get('/social', function(req, res) {
    res.send(templ.social());
});
