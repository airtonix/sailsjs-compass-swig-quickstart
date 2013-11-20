/**
 * AuthController
 *
 * @module                :: Controller
 * @description        :: Contains logic for handling requests.
 */

var passport = require('passport');

var success_callback =  function(request, response) { response.redirect('/'); };

var AuthController = {

    index: function (req, res) {
        res.view({
            slug: 'login'
        });
    },

    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },

    'persona': function(req, res){
        passport.authenticate('persona', { failureRedirect: '/auth' }, function (err, user) {
                req.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }
                    res.redirect('/');
                    return;
                });
            })(req, res);
    },

    'persona/callback': function(request, res){
        passport.authenticate('persona', success_callback)(request, res);
    },

    'github': function (request, res) {
        passport.authenticate('github', { failureRedirect: '/auth' }, function (err, user) {
                request.logIn(user, function (err) {
                    if (err) {
                        console.log(err);
                        res.view('500');
                        return;
                    }

                    res.redirect('/');
                    return;
                });
            })(request, res);
    },

    'github/callback': function (request, res) {
        passport.authenticate('github', success_callback)(request, res);
    },


    'google-plus/callback': function(request, response){
        passport.authenticate('google', success_callback)(request, response);
    }

};
module.exports = AuthController;