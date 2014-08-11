"use strict";

var Q = require("q");
var ObjectId = require("mongodb").ObjectID;
var fs = require("fs");

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
  getResponded : function (db) {
    var deferred = Q.defer();
    var collection = db.collection('guests');

    var query = {
      numGuests : {$exists : true}
    };

    collection.find(query).toArray(function(err, docs) {
      if (err) {
        deferred.reject(err);
      }

      helper.generateCsvSync(docs);
      deferred.resolve();
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

var helper = {
  generateCsvSync: function (data) {
    var fileName = "./public/csv/attendance.csv";

    try {
      console.log("I AM HERE!");
      console.log(__dirname);

      if (fs.existsSync(fileName)) {
        fs.unlinkSync(fileName);
      }

      var csv = "NAME, # INVITED, # COMING, NOTES, ATTENDING\n";

      data.forEach(function (doc) {
        doc.notes = doc.notes.replace(",", "");
        var value = doc.name + "," + doc.numInvited + "," + doc.numGuests + "," + doc.notes + "," + doc.attending + "\n";
        csv += value;
      });
      fs.appendFileSync(fileName, csv);

    } catch (err) {
      console.log(err);
    }
  }
};