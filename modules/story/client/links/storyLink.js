"use strict";

var common = require("../../../common/client/common/common");

module.exports = function (scope, element, attrs) {
    common.resetBackground(element);

    function executeAnimation() {
        animate("pre").then(function () {
            return animate("one");
        }).then(function () {
            return animate("two");
        }).then(function () {
            return animate("three");
        }).then(function () {
            return animate("four");
        }).then(function () {
            return animate("five");
        }).then(function () {
            return animate("six");
        }).then(function () {
            return animate("seven");
        });
    }
    function animate(id) {
        var defer = $.Deferred();

        scope.$broadcast("PlayAnimation-" + id, {
            callback: function (completedId) {
                defer.resolve();
            }
        });
        return defer.promise();
    }

    var $playButton = $(".play-button");
    var $window = $(window);

    $window.scroll(function (event) {
        if ($window.width() > 800) {
          return $window.scrollTop() < 90 ? $playButton.fadeIn(2000) : $playButton.fadeOut(2000);
        }
    });

    $playButton.click(function () {
        executeAnimation();
    });

    if ($window.width() < 800) {
        $playButton.hide();
    }
};