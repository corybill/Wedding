"use strict";

module.exports = function (scope) {
  scope.acceptDeclineChange = function (attending) {
    scope.currentPerson.attending = attending;

    if (!attending) {
      scope.currentPerson.numGuests = "0";
      scope.currentPerson.notes = "";
    }

    scope.$emit("accept-decline:complete", attending);
  };
};