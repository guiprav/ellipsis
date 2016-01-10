'use strict';

let app = $require('mod/app');

let express = require('express');

app.use(express.static(__dirname + '/../asset'));
