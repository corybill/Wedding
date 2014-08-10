"use strict";

module.exports = function () {
  return {
    restrict : "E",
    replace : true,
    require: "^rsvp",
    link: require("../links/rsvpNamesLink"),
    templateUrl: "/component/rsvp/rsvpNamesComponent"
  };
};