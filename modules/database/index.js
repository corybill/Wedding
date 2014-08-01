"use strict";

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Q = require("q");

var MongoUri = "mongodb://corybill:prstk1979@kahana.mongohq.com:10082/app21364298";

var instance;
module.exports = {
  getConnection : function () {
    console.log("database.getConnection");
    return (instance) ? Q.promise(instance) : createConnection();
  }
};

function createConnection() {
  var deferred = Q.defer();
  console.log("database.createConnection");
  MongoClient.connect(MongoUri, function(err, db) {
    if (err) {
      deferred.reject(err);
    }

    console.log("Database Connected.");

    instance = db;
    deferred.resolve(db);
  });

  return deferred.promise;
}