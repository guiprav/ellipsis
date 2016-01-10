'use strict';

let app = $require('mod/app');

let templ = $require('templ');

app.get('/about', function(req, res) {
    res.send(templ.about());
});
