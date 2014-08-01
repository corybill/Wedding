"use strict";

var version = "v1";

module.exports = {
  getApiRoute : function (route) {
    var apiRoute = "/" + version + "/" + route;
    console.log("Adding API Route: " + apiRoute);
    return apiRoute;
  }
};