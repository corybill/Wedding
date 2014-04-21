"use strict";

module.exports = function ($window) {
    var positions = [];
    var middlePositions = [];

    var imageMoveTimes = [
        25200, 25300, -1, 25750, 25000, -1
    ];
    var currentImageMoveIndex = 0;

    var buffer = 20;
    var imageSize = 200;

    var maxHeight = $window.innerHeight - buffer - imageSize;
    var maxWidth = $window.innerWidth - buffer - imageSize;

    this.getPositionStyle = function (index) {
        if (!positions[index]) {
            calculatePositions();
        }
        return positions[index];
    };

    this.getMidPositionStyle = function (index) {
        if (!middlePositions[index]) {
            calculateMidPositions();
        }
        return middlePositions[index];
    };

    this.wait = function (time) {
        var deferred = $.Deferred();

        setTimeout(function () {
           deferred.resolve();
        }, time);

        return deferred.promise();
    };

    this.getAndIncrementImageMoveTime = function () {
        return imageMoveTimes[currentImageMoveIndex++];
    }

    function calculatePositions() {
        var min = buffer + "px";
        var right = maxWidth + "px";
        var bottom = maxHeight + "px";

        positions[0] = {"top": min, "left": min};
        positions[1] = {"top": bottom, "left": min};
        positions[2] = {"top": bottom, "left": right};
        positions[3] = {"top": min, "left": right};
    }

    function calculateMidPositions() {
        var topMidPixelFixer = 125;
        var sideMidPixelFixer = 400;

        var midTop = buffer + topMidPixelFixer + "px";
        var midLeft = buffer + sideMidPixelFixer + "px";
        var midRight = maxWidth - sideMidPixelFixer + "px";
        var midBottom = maxHeight - topMidPixelFixer + "px";

        var midTopLeft = {"top": midTop, "left": midLeft};
        var midBottomLeft = {"top": midBottom, "left": midLeft};
        var midBottomRight = {"top": midBottom, "left": midRight};
        var midTopRight = {"top": midTop, "left": midRight};
        middlePositions = [midTopLeft, midBottomLeft, midBottomRight, midTopRight];
    }
};