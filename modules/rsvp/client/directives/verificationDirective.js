"use strict";

module.exports = function () {
  return {
    restrict : "E",
    replace : true,
    require: "^rsvp",
    link: require("../links/verificationLink"),
    templateUrl: "/component/rsvp/verificationComponent"
  };
};