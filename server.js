//node module requires for web and websockets server
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

var serverPort = '3000';

app.use(express.static(__dirname + '/')); 	// set the static files location /img will be /img for users

app.use('/css', express.static(__dirname + '/css'));     // MD Data Table CSS

app.use('/node_modules/es5-shim', express.static(__dirname + '/node_modules/es5-shim'));     // set static files location for shim files
app.use('/node_modules/es6-shim', express.static(__dirname + '/node_modules/es6-shim'));     // set static files location for shim files

app.use('/node_modules/angular', express.static(__dirname + '/node_modules/angular'));     // set static files location for angular js files
app.use('/node_modules/angular-ui-router', express.static(__dirname + '/node_modules/uirouter/angularjs/release'));     // set static files location for angular ui-router js files
app.use('/node_modules/angular-aria', express.static(__dirname + '/node_modules/angular-aria'));     // set static files location for angular animate
app.use('/node_modules/angular-animate', express.static(__dirname + '/node_modules/angular-animate'));     // set static files location for angular animate
app.use('/node_modules/angular-messages', express.static(__dirname + '/node_modules/angular-messages'));     // set static files location for angular messages
app.use('/node_modules/angular-material', express.static(__dirname + '/node_modules/angular-material'));     // set static files location for angular material


app.use('/app', express.static(__dirname + '/app'));

//app.use('/angular', express.static(__dirname + '/node_modules/svg-morpheus/compile/unminified'));
//app.use('/angular', express.static(__dirname + '/node_modules/v-accordion/dist'));
//app.use('/angular', express.static(__dirname + '/node_modules/angular-ui-router/release'));
//app.use('/d3', express.static(__dirname + '/node_modules/d3/build'));

app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT

var server = require('http').Server(app);

//Start the Express Server
server.listen(serverPort, function () {
    console.log('Simple static server listening on port ' + serverPort);
});