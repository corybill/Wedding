"use strict";

var common = require("../../../common/client/common/common");
var _ = require("lodash");
module.exports = function (scope, element) {
  common.resetBackground(element);

  var $rsvpContainer = $(".rsvp-functional-container");
  var $window = $(window);

  function init() {
    var halfWindow = $window.width() / 2;

    var leftPosition = halfWindow - 420;
    $rsvpContainer.css({left : leftPosition});
  }

  scope.peopleObj = {};

  scope.passcodeVisible = true;
  scope.rsvpNamesVisible = false;
  scope.acceptDeclineVisible = false;
  scope.guestInfoVisible = false;

  scope.$on("passcode:success", function () {
    scope.passcodeVisible = false;
    scope.rsvpNamesVisible = true;

    scope.$broadcast("rsvp-names:start");
  });

  scope.$on("accept-decline:complete", function (event, attending) {
    if (attending) {
      scope.guestInfoVisible = true;
      resetFromAccept();
      scope.$broadcast("guest-info:start");

    } else {
      scope.verificationDeclineVisible = true;
      resetFromDecline();
    }

    apply();
  });

  scope.$on("guest-info:complete", function () {
    resetGuestContainer();
    scope.acceptDeclineVisible = false;
    scope.verificationAcceptVisible = true;
  });

  scope.$on("verification:cancel", function () {
    resetGuestContainer();
  });

  scope.$on("verification:complete", function (event, success) {
    hideGuestContainer();

    if (success && scope.currentPerson.attending) {
      scope.successAcceptResponse = true;
    } else if (success && !scope.currentPerson.attending) {
      scope.successDeclineResponse = true;
    } else {
      scope.failResponse = true;
    }
  });

  scope.setCurrentPerson = function (name) {
    scope.currentPerson = (!name) ? name : scope.peopleObj[name.toUpperCase()];

    if (scope.currentPerson) {
      scope.acceptDeclineVisible = true;
    } else {
      resetToNoCurrentPerson();
    }
    apply();
  };

  function apply() {
    //If digest is not already in process, then start it by calling apply.
    if(!scope.$$phase) {
      scope.$apply();
    }
  }
  function resetGuestContainer() {
    scope.rsvpNamesVisible = true;
    scope.acceptDeclineVisible = true;
    scope.guestInfoVisible = false;
    scope.verificationAcceptVisible = false;
    scope.verificationDeclineVisible = false;
  }
  function resetToNoCurrentPerson() {
    scope.rsvpNamesVisible = true;
    scope.acceptDeclineVisible = false;
    scope.guestInfoVisible = false;
    scope.verificationAcceptVisible = false;
    scope.verificationDeclineVisible = false;
  }
  function hideGuestContainer() {
    scope.rsvpNamesVisible = false;
    scope.acceptDeclineVisible = false;
    scope.guestInfoVisible = false;
    scope.verificationAcceptVisible = false;
    scope.verificationDeclineVisible = false;
  }
  function resetFromDecline() {
    scope.guestInfoVisible = false;
    scope.verificationAcceptVisible = false;
  }
  function resetFromAccept() {
    scope.verificationDeclineVisible = false;
  }

  init();
};