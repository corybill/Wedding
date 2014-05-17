"use strict";

module.exports = function (scope, $element, attrs) {
    var $code = $element.find(".code");
    var $middleFinger = $element.find(".middle-finger");

    scope.$on("End:LetItBeMe", function () {
        setTimeout(function () {
            $code.fadeIn(3000);
        }, 44000);
    });

    scope.sheSaidYes = function () {
        setTimeout(function () {
            $code.fadeOut(2000);
        }, 0);
        scope.$emit("Update:SheSaidYes");
    };

    scope.sheSaidNo = function () {
        setTimeout(function () {
            $code.fadeOut(2000);
        }, 0);

        setTimeout(function () {
            $middleFinger.fadeIn(3000);
        }, 2500);

        setTimeout(function () {
            $middleFinger.fadeOut(2000);
        }, 7000);

        setTimeout(function () {
            $code.fadeIn(3000);
        }, 9000);
    };

    function positionCode() {
        var centerScreenWidth = (screen.availWidth / 2);
        var centerScreenHeight = (screen.availHeight / 2);

        var codeCenterLeft = centerScreenWidth - ($code.width() / 2);
        var codeCenterTop = centerScreenHeight - ($code.height() / 2) - 50;
        $code.css({left : codeCenterLeft, top : codeCenterTop});
    }

    $middleFinger.load(function () {
        var centerScreenWidth = (screen.availWidth / 2);
        var centerScreenHeight = (screen.availHeight / 2);

        var fingerCenterLeft = centerScreenWidth - ($middleFinger.width() / 2);
        var fingerCenterTop = centerScreenHeight - ($middleFinger.height() / 2) - 50;
        $middleFinger.css({left : fingerCenterLeft, top : fingerCenterTop});
    });

    positionCode();
};