"use strict";


module.exports = function ($proposalService) {
    this.getPoemAtIndex = function (index) {
        return $proposalService.getPoemAtIndex(index);
    };

    this.wait = function (time) {
        var deferred = $.Deferred();

        setTimeout(function () {
            deferred.resolve();
        }, time);

        return deferred.promise();
    };
};