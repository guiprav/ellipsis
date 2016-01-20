'use strict';

module.exports = function(list, needle) {
    if(!list) {
        return false;
    }

    if(!Array.isArray(list)) {
        list = list.toString().split(' ');
    }

    return list.includes(needle);
};
