"use strict";

module.exports = function ($rsvpService, $window) {

  this.getAllNames = function (success, fail) {
    $rsvpService.getAllNames(success, fail);
  };
  this.getResponded = function (success, fail) {
    $rsvpService.getResponded(success, fail);
  };
  this.save = function (success, fail) {
    $rsvpService.save(success, fail);
  };
  this.verifyPasscode = function (passcode, success, fail) {
    $rsvpService.verifyPasscode(passcode, success, fail);
  };
};
