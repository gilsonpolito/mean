var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var bodyParser = require('body-parser');
var express = require('express');
var load = require('express-load');
module.exports = function() {
	var app = express();
	app.use(cookieParser());
	app.use(session({secret: 'homem-avestruz', resave: true, saveUninitialized: true }));
	var home = require('../app/routes/home');
	app.set('port', 3000);
	app.use(express.static('./public'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes/auth.js')
		.then('routes')
		.into(app);
	return app;
};
