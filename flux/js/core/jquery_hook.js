"use strict";
module.exports = function () {
    var $ = require('jquery');
    $.fn.extend({
        exists: function() {
            return $(this).length > 0;
        }
    });

};