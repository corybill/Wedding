"use strict";

module.exports = function (scope, $element, attrs, poemController) {
    var $poem = $(".poem");
    var $poemBody = $(".poem-body");
    var showPoemObj = {"display": "inline"};
    var hidePoemObj = {"display": "none"};
    var currentPoemIndex = 0;

    var poemLeft = (screen.width / 2) - ($poem.width() / 2);
    $poem.css({left : poemLeft});

    function getAndIncrementPoemIndex() {
        return poemController.getPoemAtIndex(currentPoemIndex++);
    }
    function updatePoemStanza() {
        var poemStanza = getAndIncrementPoemIndex();
        scope.poem = poemStanza;
        scope.$apply();
    }

    scope.$on("Start:Poem", function () {

        //Show Poem 1 of 2
        setTimeout(function () {
            updatePoemStanza();
            $poem.fadeIn(2000);
        }, 26740);

        //Start change stanza by hiding stanza
        setTimeout(function () {
            $poemBody.fadeOut(2000);
        }, 50760);
        //Show new stanza
        setTimeout(function () {
            updatePoemStanza();
            $poemBody.fadeIn(2000);
        }, 52760);

        //Hide poem
        setTimeout(function () {
            $poem.fadeOut(2000);
        }, 77350);

        //Show Poem 2 of 2
        setTimeout(function () {
            updatePoemStanza();
            $poem.fadeIn(2000);
        }, 133420);

        //Start change stanza by hiding stanza
        setTimeout(function () {
            $poemBody.fadeOut(2000);
        }, 158390);
        //Show new stanza
        setTimeout(function () {
            updatePoemStanza();
            $poemBody.fadeIn(2000);
        }, 160390);

        //Hide poem
        setTimeout(function () {
            $poem.fadeOut(2000);
        }, 184730);

        //Show new stanza
        setTimeout(function () {
            updatePoemStanza();
            $poem.fadeIn(2000);
        }, 242000);
    });

    scope.$on("End:LetItBeMe", function () {
        $poem.fadeOut(2000);
    });
};