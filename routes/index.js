module.exports = function(app, passport) {
  
  // GET HOME ===================================
  app.get('/', function(req, res) {
    res.render('index');
  });
  // LOGIN ======================================
  app.get('/login', function(req, res) {
    res.render('login', {message: req.flash('loginMessage') });
  });
  
  // SIGNUP =======================================
  app.get('/signup', function(req, res) {
    res.render('signup', {message: req.flash('signupMessage') });
  });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',

    failureFlash: true
  }));
}
