var passport =      require('passport'),
    login =         require('./middlewares/login'),
    request =       require('request'),
    util =          require('util');


module.exports = function(app) {
  app.get('/user',
    login.required,
    function(req, res) {
      res.render('user', {
        user: req.user
      });
    });

  app.get('/register',
    login.required,
    function(req, res) {
      res.render('register', {
        user: req.user
      });
    });

  app.post('/register',
    login.required,
    function(req, res) {
      var user_id = req.user.id;
      var account_type = req.body.account_type;
      // TODO: Validate your fields here

      request({
        method: 'PATCH',
        url: util.format('https://%s/api/v2/users/%s', process.env['AUTH0_DOMAIN'], user_id),
        json: {
          user_metadata: {
            account_type: account_type
          }
        },
        headers: {
          Authorization: 'Bearer ' + process.env['AUTH0_API_KEY']
        }
      },
      function(error, response, body) {
        if (error) {
          console.log(error);
          throw error;
        }
        if (response.statusCode !== 200) {
          console.log(request.statusCode);
          console.log(body);
          throw 'Invalid request';
        }
        req.user.account_type = account_type;
        if (req.query.return_url) {
          res.redirect(req.query.return_url);
        } else {
          res.redirect('/user');
        }
      })
    });
}
