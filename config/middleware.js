var passport = require('passport')
    , PersonaStrategy = require('passport-persona').Strategy
    , GitHubStrategy = require('passport-github').Strategy
    , GooglePlusStrategy = require('passport-google-plus');

try{
    var config = require('./local');
}catch(e){
    var config = require('./production');
}

var verifyHandler = function (token, tokenSecret, profile, done) {
    process.nextTick(function () {

        User.findOne({uid: profile.id}).done(function (err, user) {
            if (user) {
                return done(null, user);
            } else {
                User.create({
                    provider: profile.provider,
                    uid: profile.id,
                    name: profile.displayName
                }).done(function (err, user) {
                        return done(err, user);
                    });
            }
        });
    });
};

passport.serializeUser(function (user, done) {
    done(null, user.uid);
});

passport.deserializeUser(function (uid, done) {
    User.findOne({uid: uid}).done(function (err, user) {
        done(err, user)
    });
});


module.exports = {

    // Init custom express middleware
        express: {
            customMiddleware: function (app) {
                if('github' in config.passport){
                    passport.use(new GitHubStrategy(config.passport.github, verifyHandler));
                }

                if('persona' in config.passport){
                    passport.use(new PersonaStrategy(config.passport.persona,
                        function(email, done) {
                            User.findByEmail({ email: email }, function (err, user) {
                            return done(err, user);
                        });
                    }));
                }

                if('googlePlus' in config.passport){
                    passport.use(new GooglePlusStrategy(config.passport.googlePlus,
                        function(tokens, profile, done) {
                            done(null, profile, tokens);
                        }));
                }

                app.use(passport.initialize());
                app.use(passport.session());
            }
        }

};