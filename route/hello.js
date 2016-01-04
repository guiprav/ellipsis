'use strict';

let app = require('../app');

let templ = require('../templ');

app.get('/hello', function(req, res) {
    res.send(templ.hello());
});
