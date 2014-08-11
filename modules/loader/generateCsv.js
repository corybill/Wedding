"use strict";

var database = require("../database");
var fs = require("fs");
var _ = require("lodash");
var Q = require("q");

function getData(people) {
  var deferred = Q.defer();

  database.getConnection().then(function (db) {
    console.log("Getting Data");

    var query = {
      numGuests : {$exists : true}
    };

    var collection = db.collection('guests');
    collection.find(query).toArray(function(err, docs) {
      if (err) {
        deferred.reject(err);
      }

      deferred.resolve(docs);
      db.close();
    });
  }).fail(function (err) {
    console.log(err);
    deferred.reject(err);
  });

  return deferred.promise;
}

function generateCsv(data) {
  console.log("Generating CSV.");

  var fileName = "./attendance.csv";

  try {
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


function saveToFile(csv) {
  var file = fs.readFileSync('./Names.csv', 'utf8');

  var names = file.split("\r\n");
  names.sort();
  var output = _.map(names, function (item) {
    var name = item.substring(0, item.length - 2);
    var numInvited = parseInt(item.substring(item.length - 1));
    return {name: name, numInvited: numInvited};
  });

  console.log(output);
  return output;
}

getData().then(function (data) {
  generateCsv(data);
});