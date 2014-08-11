"use strict";

var api = require("../../../main/client/api/service");

module.exports = function ($http) {
  return {
    getAllNames : function (success, fail) {
      var route = api.getApiRoute("rsvp");
      $http.get(route).
        success(function(data, status, headers, config) {
          success(data);
        }).
        error(function(data, status, headers, config) {
          fail(data);
        });
    },

    getResponded : function (success, fail) {
      var route = api.getApiRoute("rsvp/responded");
      $http.get(route).
        success(function(data, status, headers, config) {
          success(data);
        }).
        error(function(data, status, headers, config) {
          fail(data);
        });
    },

    save : function (guest, success, fail) {
      var route = api.getApiRoute("rsvp");
      $http.post(route, {guest: guest}).
        success(function(data, status, headers, config) {
          success(data);
        }).
        error(function(data, status, headers, config) {
          fail(data);
        });
    },

    verifyPasscode : function (passcode, success, fail) {
      var route = api.getApiRoute("rsvp/passcode");
      $http.post(route, {passcode: passcode}).
        success(function(data, status, headers, config) {
          success(data);
        }).
        error(function(data, status, headers, config) {
          fail(data);
        });
    }
  };
};