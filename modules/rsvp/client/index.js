"use strict";

var moduleName = "rsvp";

module.exports = function (angular) {
  angular.module(moduleName, [])
    .directive("rsvp", require("./directives/rsvpDirective"))
    .directive("rsvpNames", require("./directives/rsvpNamesDirective"))
    .directive("acceptDecline", require("./directives/acceptDeclineDirective"))
    .directive("passcode", require("./directives/passcodeDirective"))
    .directive("guestInfo", require("./directives/guestInfoDirective"))
    .directive("verification", require("./directives/verificationDirective"))
    .controller("rsvpResponded", require("./controllers/rsvpRespondedController"))
    .service("$rsvpService", require("./services/rsvpService"))
    .config(function ($routeProvider) {
      $routeProvider
        .when("/rsvp", {templateUrl: "rsvp"})
        .when("/rsvp/responded", {template : " ", controller: "rsvpResponded"});
    });
  return moduleName;
};