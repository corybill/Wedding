"use strict";

var moduleName = "rsvp";

module.exports = function (angular) {
  angular.module(moduleName, [])
    .directive("rsvp", require("./directives/rsvpDirective"))
    .service("$rsvpService", require("./services/rsvpService"))
    .controller('rsvpController', require('./controllers/rsvpController'))
    .config(function ($routeProvider) {
      $routeProvider
        .when("/rsvp", {templateUrl: "rsvp"});
    });
  return moduleName;
};