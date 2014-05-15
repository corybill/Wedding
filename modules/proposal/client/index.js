/**
 * Created with IntelliJ IDEA.
 * User: Cory
 * Date: 4/13/14
 * Time: 11:02 AM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

var moduleName = 'proposal';

module.exports = function (angular) {
    angular.module(moduleName, [])
        .service('$proposalService', require('./services/proposalService'))
        .directive("proposal", require("./directives/proposalDirective"))
        .directive("imageFloater", require("./directives/imageDirective"))
        .directive("poem", require("./directives/poemDirective"))
        .directive("lyrics", require("./directives/lyricsDirective"))
        .config(function ($routeProvider) {
            $routeProvider
                .when("/proposal", {templateUrl: "proposal"});
        });
    return moduleName;
};