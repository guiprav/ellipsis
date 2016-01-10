'use strict';

require('./init');

let express = require('express');

let conf = require('../conf');

exports = module.exports = express();

require('../route');

exports.listen(process.env.PORT || conf.defaultPort);
