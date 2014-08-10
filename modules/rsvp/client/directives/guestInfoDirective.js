"use strict";

module.exports = function () {
  return {
    restrict : "E",
    replace : true,
    link: require("../links/guestInfoLink"),
    templateUrl: "/component/rsvp/guestInfoComponent"
  };
};