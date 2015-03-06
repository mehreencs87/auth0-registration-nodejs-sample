var passport = require('passport');

module.exports = function(app) {
  // Auth0 callback handler
  app.get('/callback',
    passport.authenticate('auth0'),
    function(req, res) {
      // Check if the user has an account type flag
      // If they don't, they are not registered and need to
      // be taken to the registration page
      if (!req.user._json.user_metadata || !req.user._json.user_metadata.account_type) {
        res.redirect("/register");
      } else {
        req.user.account_type = req.user._json.user_metadata.account_type;
      }
      res.redirect("/user");
    });

}
