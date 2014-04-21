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
        .controller("proposalController", require("./controllers/proposalController"))
        .directive("proposal", require("./directives/proposalDirective"))
        .directive("imageFloater", require("./directives/imageDirective"))
        .config(function ($routeProvider) {
            $routeProvider
                .when("/proposal", {templateUrl: "proposal"});
        });
    return moduleName;
};