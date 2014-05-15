"use strict";

module.exports = function ($window) {
    var positions = [];
    var middlePositions = [];

    var buffer = 35;
    var imageSize = 200;

    var maxHeight = $window.innerHeight - buffer - imageSize - 20;
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

    function calculatePositions() {
        var min = buffer + "px";
        var right = maxWidth + "px";
        var bottom = maxHeight + "px";

        positions[0] = {"top": -10, "left": 20};
        positions[1] = {"top": bottom, "left": 20};
        positions[2] = {"top": bottom, "left": right};
        positions[3] = {"top": -10, "left": right};
    }

    function calculateMidPositions() {
        var topMidPixelFixer = 100;
        var sideMidPixelFixer = 350;

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