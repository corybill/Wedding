"use strict";

var common = require("../../../common/client/common/common");
var _ = require("lodash");
module.exports = function (scope, element, attrs, rsvpController) {
  common.resetBackground(element);

  var $rsvpNames = element.find(".rsvp-names");
  var $numGuests = element.find(".num-guests");
  var $passcodeContainer = element.find(".passcode-container");
  var $passcodeWrong = element.find(".passcode-wrong");
  var $guestContainer = element.find(".guest-container");
  var $passcodeInput = element.find(".passcode-input");

  var peopleObj = {};

  scope.userHasNotAuthenticated = true;

  function init() {
    function getAllNamesSuccess(response) {

      var autoCompleteData = _.map(response.result, function (item) {
        peopleObj[item.name] = item;
        return {label : item.name, value : item.name, id : item._id};
      });

      $rsvpNames.autocomplete({
        source: autoCompleteData,
        select: function( event, ui ) {
          setCurrentPerson(ui.item.value);
        },
        search: function (event) {
          setCurrentPerson(event.currentTarget.value);
        }
      });

      $numGuests.spinner({ max: 10, min: 0 }).val(0);
    }

    function getAllNamesFail(err){
      console.log(err);
    }

    rsvpController.getAllNames(getAllNamesSuccess, getAllNamesFail);
  }

  init();

  function setCurrentPerson(name) {
    scope.currentPerson = (!name) ? name :
      peopleObj[name.toUpperCase()];
    scope.$apply();

    if (scope.currentPerson) {
      setTimeout(function () {
        $numGuests.focus();
      },500);
    }
  }

  function verifyPasscodeSuccess(response) {
    if (response.result === "VALID") {
      scope.userHasNotAuthenticated = false;
      scope.userHasAuthenticated = true;
      setTimeout(function () {
        $rsvpNames.focus();
      },500);

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
  function saveSuccess(response) {
    scope.userSaving = false;
    scope.successResponse = true;
    console.log("Save success: " + response);
  }
  function saveFail(err) {
    scope.userSaving = false;
    scope.failResponse = true;
    console.log("Save fail: " + err);
  }

  scope.verifyPasscode = function () {
    rsvpController.verifyPasscode(scope.passcode, verifyPasscodeSuccess, verifyPasscodeFail);
  };
  scope.verifySaving = function () {
    scope.currentPerson.numGuests = $numGuests.val();
    scope.userSaving = true;
    scope.userHasAuthenticated = false;
  };

  scope.savePerson = function () {
    rsvpController.save(scope.currentPerson, saveSuccess, saveFail);
  };
  scope.cancelSave = function () {
    scope.userSaving = false;
    scope.userHasAuthenticated = true;
  };

  $rsvpNames.blur(function (event) {
    setCurrentPerson(event.currentTarget.value);
  });
  $passcodeInput.keydown(function (event) {
    if (event.keyCode === $.ui.keyCode.ENTER) {
      rsvpController.verifyPasscode(scope.passcode, verifyPasscodeSuccess, verifyPasscodeFail);
    }
  });
};