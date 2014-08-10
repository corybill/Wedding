"use strict";

var common = require("../../../common/client/common/common");
var _ = require("lodash");
module.exports = function (scope, element, attrs, rsvpController) {

  var $rsvpNames = element.find(".rsvp-names");
  var $passcodeContainer = element.find(".passcode-container");
  var $passcodeWrong = element.find(".passcode-wrong");
  var $passcodeInput = element.find(".passcode-input");


  function verifyPasscodeSuccess(response) {
    if (response.result === "VALID") {
      scope.$emit("passcode:success");

    } else {
      $passcodeWrong.fadeIn(1000);
      setTimeout(function () {
        $passcodeWrong.fadeOut(1000);
      }, 1500);
    }
  }
  function verifyPasscodeFail(err) {
    console.log(err);
  }

  scope.verifyPasscode = function () {
    rsvpController.verifyPasscode(scope.passcode, verifyPasscodeSuccess, verifyPasscodeFail);
  };

  $passcodeInput.keydown(function (event) {
    if (event.keyCode === $.ui.keyCode.ENTER) {
      rsvpController.verifyPasscode(scope.passcode, verifyPasscodeSuccess, verifyPasscodeFail);
    }
  });
};