var passport = require('passport');
const User = require('../models/user');
require('../config/passport')(passport);
var router = require('express').Router();
router.post('/google', function (req, res) {
  User.find({
    email: req.body.email
  }, (err, user) => {
    if (err) res.send(err);
    if (user.length == 0) {
      User.create(req.body, (err, docs) => {
        if (err) res.send(err);
        res.send(docs)
      });
    } else {
      res.send(user[0])
    }
  })
});
router.post('/login', passport.authenticate('local-login', {
    failureFlash: true
  }),
  (req, res) => {
    res.send(req.user);
  });
router.post('/signup', passport.authenticate('local-signup'),
  (req, res) => {
    res.send(req.user);
  });
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect(process.env.RURL);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.RURL);
});

router.get('/current_user', (req, res) => {
  if(!req.user)res.send({user:null,err:"Login again"});
  else res.send({user:req.user,err:null});
});
router.get('/email/:email', (req, res) => {
  User.findOne({
    email: req.params.email
  }, (err, doc) => {
    if (doc) res.send({
      err: "Email already exists"
    });
    else res.send({
      err: null
    })
  })
})
module.exports = router