var LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user.js');
var bcrypt = require('bcrypt-nodejs');

module.exports = function (passport) {
	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		User.findById(id, function (err, user) {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function (req, email, password, done) {
			process.nextTick(function () {
				User.findOne({
					'email': email
				}, function (err, user) {
					if (err)
						return done(err);
					if (user) {
						return done(null, false);
					} else {
						var newUser = {
							email: email,
							password: generateHash(password),
							name: req.body.name
						}
						User.create(newUser, (err, user) => {
							if (err) console.log(err);
							return done(null, user);
						});
					}

				});

			});

		}));

	passport.use('local-login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},
		function (req, email, password, done) {
			User.findOne({
				'email': email
			}, function (err, user) {
				if (err)
					return done(err);
				if (!user)
					return done(null, false);
				if (!user.password)
					return done(null, false)
				if (!validPassword(password, user.password))
					return done(null, false, {
						message: "Invalid password"
					});
				return done(null, user);
			});

		}));
	passport.use(
		new GoogleStrategy({
				callbackURL: "/auth/google/callback",
				clientID: process.env.GCID,
				clientSecret: process.env.GCS,
				proxy: true
			},
			async (accessToken, refreshToken, profile, done) => {
				try {
					const existingUser = await User.findOne({
						email: profile.email
					});
					if (existingUser) {
						return done(null, existingUser);
					}
					const user = await new User({
						googleId: profile.id,
						email: profile.email,
						name: profile.displayName,
						token: profile.token,
						imageUrl: profile.imageUrl
					}).save();
					done(null, user);
				} catch (err) {
					done(err, null);
				}
			}
		)
	);
};
const generateHash = function (password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

const validPassword = function (password, password2) {
	return bcrypt.compareSync(password, password2);
};