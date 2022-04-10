"use strict";

var Q = require("q");

module.exports = {
  getAllNames : function () {
    var deferred = Q.defer();
    deferred.resolve();
    return deferred.promise;
  },
  getResponded : function () {
    var deferred = Q.defer();
    deferred.resolve();
    return deferred.promise;
  },
  save : function () {
    var deferred = Q.defer();
    deferred.resolve();
    return deferred.promise;
  },
  verifyPasscode : function (passcode) {
    var result = (passcode.toLowerCase() === "bigfluffydog" || passcode.toLowerCase() === "boobies") ? "VALID" : "INVALID";
    return new Q(result);
  }
};
