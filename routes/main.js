const express = require('express');

const router = express.Router();

const users = [];

router.get('/users', (req, res, next) => {
  // I use ES6 syntaxe for users key/value ( users : users can be only users)
  res.render('users', { pageTitle: 'User', path: '/users', users });
});

router.post('/', (req, res, next) => {
  users.push({ userName: req.body.user_name });
  res.redirect('/users');
});

router.get('/', (req, res, next) => {
  res.render('home', { pageTitle: 'Home', path: '/' });
});

module.exports = router;
