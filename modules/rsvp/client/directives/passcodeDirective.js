"use strict";

module.exports = function () {
  return {
    restrict : "E",
    replace : true,
    require: "^rsvp",
    link: require("../links/passcodeLink"),
    templateUrl: "/component/rsvp/passcodeComponent"
  };
};