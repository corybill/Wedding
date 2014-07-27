"use strict";

var common = require("../../../common/client/common/common");

module.exports = function (scope, element, attrs) {
    common.resetProposalBackground(element);

    var imagesReadyCount = 0;
    var $player = $("#player");

    scope.$on("Loaded:Image", function () {
        imagesReadyCount++;
        if (imagesReadyCount === 4) {
            scope.$broadcast("InitialPosition:ImageFloater");
            setTimeout(playAndGo, 2000);
        }
    });

    scope.$on("Update:SheSaidYes", function () {
        cancelOceanWaves();
        scope.$broadcast("Start:SheSaidYes");
    });

    function playAndGo() {
        $player[0].volume = 0.5;
        $player[0].play();
        $player.on("ended", handleEndOfLetItBeMe);

        scope.$broadcast("Start:Poem");
        scope.$broadcast("Start:OpeningLyrics");

        setTimeout(function () {
            scope.$broadcast("Start:Chorus");
        }, 79200);

        setTimeout(function () {
            scope.$broadcast("Start:Chorus");
        }, 186790);
    }

    function handleEndOfLetItBeMe() {
        $player.off("ended", handleEndOfLetItBeMe);
        $player.on("ended", playOceanWaves);

        scope.$broadcast("End:LetItBeMe");

        setTimeout(function () {
            scope.$broadcast("Hide:Images");
        }, 38000);

        playOceanWaves();
    }
    function playOceanWaves() {
        $player[0].setAttribute("src", "audio/proposal/Ocean_Waves.mp3");
        $player[0].play();
    }

    function cancelOceanWaves() {
        $player.off("ended", playOceanWaves);
    }
};