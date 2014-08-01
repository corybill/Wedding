/**
 * Module dependencies
 */
var express = require('express'),
  routes = require('./modules/main/server/routes/routes'),
  http = require('http'),
  fs = require('fs'),
  path = require('path'),
  _ = require('lodash');

var app = module.exports = express();

/**
* Configuration
*/

// all environments
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
   app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
};

_.forEach(fs.readdirSync("./modules/"), function (moduleName) {
    var modulePath = "/" + moduleName;
    var moduleServerPath = "./modules" + modulePath + "/server/";

    //Probably should be in **module**/server but it isn't necessary to create a server for one route.
    app.get(modulePath, routes.moduleViews);

    try {
      require(moduleServerPath).addApiRoutes(app);
    } catch (err) {
      //Ignore unimplemented servers.
      //console.log("moduleServerPath does not exist: " + moduleServerPath);
      //console.log(err);
    }
});

/**
* Start Server
*/
try {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
} catch (error) {
   console.log(error);
}
