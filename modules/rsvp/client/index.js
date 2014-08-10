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
    .service("$rsvpService", require("./services/rsvpService"))
    .config(function ($routeProvider) {
      $routeProvider
        .when("/rsvp", {templateUrl: "rsvp"});
    });
  return moduleName;
};