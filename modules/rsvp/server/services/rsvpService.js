"use strict";

var Q = require("q");
var ObjectId = require("mongodb").ObjectID;

module.exports = {
  getAllNames : function (db) {
    var deferred = Q.defer();
    var collection = db.collection('guests');

    collection.find().toArray(function(err, docs) {
      if (err) {
        deferred.reject(err);
      }

      deferred.resolve(docs);
    });

    return deferred.promise;
  },
  save : function (guests, db) {
    var deferred = Q.defer();

    var collection = db.collection('guests');
    guests._id = new ObjectId(guests._id);
    collection.update( {_id : guests._id}, guests, function(err, docs) {
      if (err) {
        deferred.reject(err);
      }
      console.log(docs);
      deferred.resolve();
    });

    return deferred.promise;
  },
  verifyPasscode : function (passcode) {
    var result = (passcode.toLowerCase() === "bigfluffydog" || passcode.toLowerCase() === "boobies") ? "VALID" : "INVALID";
    return new Q(result);
  }
};