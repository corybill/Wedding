"use strict";

module.exports = function () {
  return {
    restrict : "E",
    replace : true,
    link: require("../links/acceptDeclineLink"),
    templateUrl: "/component/rsvp/acceptDeclineComponent"
  };
};