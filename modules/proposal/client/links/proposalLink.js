"use strict";

module.exports = function (scope, element, attrs) {
    var common = require("../../../common/client/common/common");
    common.resetProposalBackground(element);

    var imagesReadyCount = 0;

    scope.$on("ProposalImagesLoaded", function () {
        imagesReadyCount++;
        if (imagesReadyCount === 4) {
            scope.$broadcast("ImageFloater:InitialPosition");
            setTimeout(playAndGo, 2000);
        }
    });

    function playAndGo() {
        $("#player")[0].volume = 0.25;
        $("#player")[0].play();

        //startChorusTimer();

        //$("#player").bind("ended", handleEndOfLetItBeMe);

        /*startInitialPoemWaitingTimer( function () {
            poemRotation();
        });*/
    }
};