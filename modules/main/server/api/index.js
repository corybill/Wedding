"use strict";

var fs = require('fs');

var version = "v1";
module.exports = {
  getApiRoute : function (route) {
    var apiRoute = "/" + version + "/" + route;
    console.log("Adding API Route: " + apiRoute);
    return apiRoute;
  },
  sendSuccess : function (res, result) {
    res.send(200, {result : result});
  },
  sendError : function (res, err) {
    res.send(500, {error : err});
  }
};