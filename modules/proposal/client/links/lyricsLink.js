"use strict";

module.exports = function (scope, $element, attrs, lyricsController) {
    var TopLeft = "topLeft";
    var $topLeft = $(".topLeft");

    var Center = "center";
    var $center = $(".center");

    var BotRight = "botRight";
    var $botRight = $(".botRight");

    var showLyric = {"font-size": "70px", "opacity": 1 };
    var showLyricOne = {"font-size": "50px", "opacity": 1 };
    var showLyricTwo = {"font-size": "70px", "opacity": 0 };
    var hideLyric = {"font-size": "0px", "opacity": 0 };

    var chorusLyricsIndex = 0;
    var initialLyricsIndex = 0;
    var endingLyricsIndex = 0;

    function getAndIncrementInitialLyricsIndex() {
        return lyricsController.getInitialLyricsAtIndex(initialLyricsIndex++);
    }
    function updateInitialLyricsAtPlacement(variable) {
        var lyric = getAndIncrementInitialLyricsIndex();
        scope.lyric[variable] = lyric;
        scope.$apply();
    }

    function getAndIncrementLyricsIndex() {
        return lyricsController.getLyricsAtIndex(chorusLyricsIndex++);
    }
    function updateLyricsAtPlacement(variable) {
        var lyric = getAndIncrementLyricsIndex();
        scope.lyric[variable] = lyric;
        scope.$apply();
    }

    function getAndIncrementEndingLyricsIndex() {
        return lyricsController.getEndingLyricsAtIndex(endingLyricsIndex++);
    }
    function updateEndingLyricsAtPlacement(variable) {
        var lyric = getAndIncrementEndingLyricsIndex();
        scope.lyric[variable] = lyric;
        scope.$apply();
    }

    function prepareLyricsModule() {
        scope.lyric = {};

        var centerLeft = (screen.width / 2) - ($center.width() / 2);
        $center.css({left : centerLeft, width : 200});
    }
    function clearAll() {
        $topLeft.css(hideLyric);
        $center.css(hideLyric);
        $botRight.css(hideLyric);
    }

    prepareLyricsModule();

    scope.$on("Start:OpeningLyrics", function () {
        //OPENING LYRICS
        //To the love of my life
        setTimeout(function () {
            updateInitialLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 6000);
        }, 0);

        setTimeout(function () {
            $center.animate(showLyricTwo, 2500);
        }, 6000);

        setTimeout(function () {
            $center.css(hideLyric);
        }, 9000);

        //I will always love you
        setTimeout(function () {
            updateInitialLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 6000);
        }, 9500);

        setTimeout(function () {
            $center.animate(showLyricTwo, 2500);
        }, 15500);

        setTimeout(function () {
            $center.css(hideLyric);
        }, 18500);

        //Forever
        setTimeout(function () {
            updateInitialLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 6000);
        }, 19000);

        setTimeout(function () {
            $center.animate(showLyricTwo, 3000);
        }, 25000);

        setTimeout(function () {
            $center.css(hideLyric);
        }, 28500);
    });
    scope.$on("Start:Chorus", function () {
        $center.css({width: "100%"});
        var centerLeft = (screen.width / 2) - ($center.width() / 2);
        $center.css({left : centerLeft});

        //CHORUS 1 OF 2
        //One, Two, Three & One, Two, Three Sequence 1 of 3
        //That's
        setTimeout(function () {
            updateLyricsAtPlacement(TopLeft);
            $topLeft.animate(showLyric, 400);
        }, 0);
        //When
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyric, 400);
        }, 410);
        //You
        setTimeout(function () {
            updateLyricsAtPlacement(BotRight);
            $botRight.animate(showLyric, 400);
        }, 970);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 1500);

        //Need
        setTimeout(function () {
            updateLyricsAtPlacement(TopLeft);
            $topLeft.animate(showLyric, 1500);
        }, 1550);
        //Some
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyric, 1500);
        }, 3430);
        //One
        setTimeout(function () {
            updateLyricsAtPlacement(BotRight);
            $botRight.animate(showLyric, 1500);
        }, 5150);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 6910);

        //One, Two, Three & One, Two, Three Sequence 2 of 3
        //Some
        setTimeout(function () {
            updateLyricsAtPlacement(TopLeft);
            $topLeft.animate(showLyric, 400);
        }, 6960);
        //One
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyric, 400);
        }, 7410);
        //That
        setTimeout(function () {
            updateLyricsAtPlacement(BotRight);
            $botRight.animate(showLyric, 400);
        }, 7960);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 8470);

        //You
        setTimeout(function () {
            updateLyricsAtPlacement(TopLeft);
            $topLeft.animate(showLyric, 1500);
        }, 8520);
        //Can
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyric, 1500);
        }, 10140);
        //Call
        setTimeout(function () {
            updateLyricsAtPlacement(BotRight);
            $botRight.animate(showLyric, 1500);
        }, 11770);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 13530);


        //When all your faith is gone
        setTimeout(function () {
            updateLyricsAtPlacement(TopLeft);
            $topLeft.animate(showLyric, 6550);
        }, 13580);

        //It Feels like you cant go on
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyric, 6550);
        }, 20360);

        //Let It Be Me
        setTimeout(function () {
            updateLyricsAtPlacement(BotRight);
            $botRight.animate(showLyric, 12900);
        }, 27030);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 40500);

        //One, Two, Three & One, Two, Three Sequence 3 of 3
        //If
        setTimeout(function () {
            updateLyricsAtPlacement(TopLeft);
            $topLeft.animate(showLyric, 400);
        }, 40550);
        //It's
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyric, 400);
        }, 41010);
        //A
        setTimeout(function () {
            updateLyricsAtPlacement(BotRight);
            $botRight.animate(showLyric, 400);
        }, 41560);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 42050);

        //Friend
        setTimeout(function () {
            updateLyricsAtPlacement(TopLeft);
            $topLeft.animate(showLyric, 1500);
        }, 42100);
        //You
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyric, 1500);
        }, 43820);
        //Need
        setTimeout(function () {
            updateLyricsAtPlacement(BotRight);
            $botRight.animate(showLyric, 1500);
        }, 45470);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 47180);

        //Let It Be Me
        setTimeout(function () {
            updateLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 6000);
        }, 47230);

        //Fade out Let It Be Me
        setTimeout(function () {
            $center.animate(showLyricTwo, 4000);
            chorusLyricsIndex = 0;
        }, 53230);

        //Clear all
        setTimeout(function () {
            clearAll();
        }, 57730);
    });

    scope.$on("End:LetItBeMe", function () {
        $center.css({width : 200});
        prepareLyricsModule();

        //And now it is my turn - Fade in
        setTimeout(function () {
            updateEndingLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 5000);
        }, 5000);
        //And now it is my turn - Start fade out
        setTimeout(function () {
            $center.animate(showLyricTwo, 3000);
            chorusLyricsIndex = 0;
        }, 10000);
        //Clear all
        setTimeout(function () {
            clearAll();
        }, 13250);

        //To take her hand - Fade in
        setTimeout(function () {
            updateEndingLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 5000);
        }, 14000);
        //To take her hand - Start fade out
        setTimeout(function () {
            $center.animate(showLyricTwo, 3000);
        }, 19000);
        //Clear all
        setTimeout(function () {
            clearAll();
        }, 22250);

        //To love her - Fade in
        setTimeout(function () {
            updateEndingLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 5000);
        }, 23000);
        //To love her - Start fade out
        setTimeout(function () {
            $center.animate(showLyricTwo, 3000);
        }, 28000);
        //Clear all
        setTimeout(function () {
            clearAll();
        }, 32000);

        //Not till death shall we part - Fade in
        setTimeout(function () {
            updateEndingLyricsAtPlacement(Center);
            $center.animate(showLyricOne, 5000);
        }, 33000);
        //Not till death shall we part - Start fade out
        setTimeout(function () {
            $center.animate(showLyricTwo, 3000);
        }, 38000);
        //Clear all
        setTimeout(function () {
            clearAll();
        }, 42000);
    });
};