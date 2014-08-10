"use strict";

var common = require("../../../common/client/common/common");
var _ = require("lodash");
module.exports = function (scope, element, attrs, rsvpController) {

  var $rsvpNames = element.find(".rsvp-names");

  scope.$on("rsvp-names:start", function () {
    rsvpController.getAllNames(getAllNamesSuccess, getAllNamesFail);
  });

  function getAllNamesSuccess(response) {

    var autoCompleteData = _.map(response.result, function (item) {
      scope.peopleObj[item.name] = item;
      return {label : item.name, value : item.name, id : item._id};
    });

    $rsvpNames.autocomplete({
      source: autoCompleteData,
      select: function( event, ui ) {
        scope.setCurrentPerson(ui.item.value);
      },
      search: function (event) {
        scope.setCurrentPerson(event.currentTarget.value);
      }
    });

    $rsvpNames.focus();
  }

  function getAllNamesFail(err){
    console.log(err);
  }

  $rsvpNames.blur(function (event) {
    scope.setCurrentPerson(event.currentTarget.value);
  });
};