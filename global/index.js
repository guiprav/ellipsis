'use strict';

let loadTree = require('./loadTree');

loadTree(__dirname, global);

delete global.index;
