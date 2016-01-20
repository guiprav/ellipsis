'use strict';

let overloaded = require('overloaded');

module.exports = function(expr, ifTrue, ifFalse) {
    let args = overloaded(arguments, {
        3: ['expr', 'ifTrue', 'options'],
        4: ['expr', 'ifTrue', 'ifFalse', 'options'],
    });

    return args.expr? args.ifTrue : args.ifFalse;
};
