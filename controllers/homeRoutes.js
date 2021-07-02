// home routes 
const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// end point is / 

router.get('/', async (req, res) => {
  try {
    res.render('homepage-root', { 
      layout: 'homepage', 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// login 
router.get('/login', (req, res) => {
  
  // if the user is logged in, redirect to homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // otherwise paint login page
  res.render('login', { 
    layout: 'homepage'
  });
});

// sign up 
router.get('/signup', (req, res) => {
  
  // if the user is logged in, redirect to homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  
  // otherwise paint login page
  res.render('signup', { 
    layout: 'homepage'
  });
});

// export
module.exports = router;
