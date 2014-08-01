"use strict";

var routes = require('./routes/routes.js');

//These are the base routes for getting views.
module.exports = {
  addApiRoutes : function (app) {
    app.get('/', routes.index);
    app.get('/component/:module/:component', routes.componentViews);
  }
};