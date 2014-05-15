"use strict";

module.exports = function ($window, $proposalService) {
    var middlePositions = [];

    var buffer = 20;
    var imageSize = 200;

    var maxHeight = $window.innerHeight - buffer - imageSize;
    var maxWidth = $window.innerWidth - buffer - imageSize;


    this.getLyricsAtIndex = function (index) {
        return $proposalService.getLyricsAtIndex(index);
    };
    this.getInitialLyricsAtIndex = function (index) {
        return $proposalService.getInitialLyricsAtIndex(index);
    };
    this.getEndingLyricsAtIndex = function (index) {
        return $proposalService.getEndingLyricsAtIndex(index);
    };
};