var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {
	var Usuario = mongoose.model('Usuario');
	passport.use(new GitHubStrategy({
		clientID: '3d6796034d97b7017c3b',
		clientSecret: 'de44b130aedbfc575fa85c77011c77b4cf0e6509',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accesstoken, refreshToken, profile, done) {
		Usuario.findOrCreate(
			{"login" : profile.username},
			{"nome" : profile.username},
			function(erro, usuario){
				if(erro) {
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			}
		);
	}));
	
	passport.serializeUser(function(usuario, done) {
		done(null,usuario._id);
	});

	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec().then(
			function(usuario) {
				done(null,usuario);
			});
		}
	);
};