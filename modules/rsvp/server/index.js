"use strict";

var api = require("../../main/server/api");
var rsvpService = require("./services/rsvpService");

module.exports = {
  addApiRoutes : function (app) {
    console.log("Adding 'rsvp' API routes.");

    app.get(api.getApiRoute("rsvp"), function (req, res) {
      rsvpService.getAllNames().then(function (result) {
        api.sendSuccess(res, result);
      }).fail(function (err) {
        api.sendError(res, err);
      }).done();
    });

    app.get(api.getApiRoute("rsvp/responded"), function (req, res) {
      rsvpService.getResponded().then(function () {
        api.sendSuccess(res);
      }).fail(function (err) {
        api.sendError(res, err);
      }).done();
    });

    app.post(api.getApiRoute("rsvp"), function (req, res) {
      rsvpService.save(req.body.guest).then(function (result) {
        api.sendSuccess(res, result);
      }).fail(function (err) {
        api.sendError(res, err);
      }).done();
    });

    app.post(api.getApiRoute("rsvp/passcode"), function (req, res) {
      rsvpService.verifyPasscode(req.body.passcode).then(function (result) {
        api.sendSuccess(res, result);
      }).fail(function (err) {
        api.sendError(res, err);
      }).done();
    });
  }
};
