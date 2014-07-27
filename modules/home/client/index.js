'use strict';

var moduleName = 'home';

module.exports = function (angular) {
    angular.module(moduleName, [])
        .directive('home', require('./directives/homeDirective'))
        .config(function ($routeProvider) {
            $routeProvider
                .when("/home", {templateUrl: "home"});
        });
    return moduleName;
};