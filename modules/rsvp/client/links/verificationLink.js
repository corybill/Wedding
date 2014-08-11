"use strict";

module.exports = function (scope, element, attrs, rsvpController) {

  scope.cancelSave = function () {
    scope.$emit("verification:cancel");
  };
  scope.saveGuest = function () {
    scope.currentPerson.timestamp = new Date().getTime();
    rsvpController.save(scope.currentPerson, saveSuccess, saveFail);
  };

  function saveSuccess(response) {
    scope.$emit("verification:complete", true);
    console.log("Save success: " + response);
  }
  function saveFail(err) {
    scope.$emit("verification:complete", false);
    console.log("Save fail: " + err);
  }
};