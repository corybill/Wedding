"use strict";

module.exports = function (scope, element) {
  var $numGuests = element.find(".num-guests");
  $numGuests.spinner({ max: 10, min: 0 }).val(0);

  scope.$on("guest-info:start", function () {
    setTimeout(function () {
      $numGuests.focus();
    }, 250);
  });

  scope.finishedGuestNotes = function () {
    var newNotes = scope.guestNotesVal;
    scope.currentPerson.notes = (!newNotes || newNotes === "") ? scope.currentPerson.notes : newNotes;

    scope.currentPerson.numGuests = $numGuests.val();
    scope.$emit("guest-info:complete");
  };
};