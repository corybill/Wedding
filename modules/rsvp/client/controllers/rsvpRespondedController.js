"use strict";

module.exports = function ($rsvpService, $window, $location) {
  this.getResponded = function (success, fail) {
    $rsvpService.getResponded(success, fail);
  };

  this.getResponded(function () {
    $window.location = "http://www.justineandcorybill.com/csv/attendance.csv";
    //$window.location = "http://localhost:3000/csv/attendance.csv";
  }, function (err) {
    console.log(err);
  });

};