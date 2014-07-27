"use strict";

var common = require("../../../common/client/common/common");

module.exports = function (scope, element, attrs) {
    common.resetBackground(element);
};

$(document).ready(function() {
    $("a.group").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'overlayShow'	:	false
    });
});