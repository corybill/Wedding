"use strict";

module.exports = function () {
  return {
    restrict : "E",
    replace : true,
    link: require("../links/rsvpLink"),
    controller: require("../controllers/rsvpController"),
    templateUrl: "/component/rsvp/rsvpComponent"
  };
};