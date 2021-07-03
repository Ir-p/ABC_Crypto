// home routes 
const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// end point is / 

const cards = [
  {
    "id": 1,
    "name": "Information",
    "content": "What is cryptocurrency?"
  },
  {
    "id": 2,
    "name": "Social Media",
    "content": "Link to some API"
  },
  {
    "id": 3,
    "name": "Buy/Sell",
    "content": "How to buy/sell cryptocurrency in different crypto exchanes."
  },
  {
    "id": 4,
    "name": "Trend",
    "content": "Historic and current prices for top ten cryptocurrencies."
  }
];

// home page (all cards with mission statement)
router.get('/', async (req, res) => {
  try {
    res.render('homepage-cards', { 
      layout: 'homepage', cards,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all cards
router.get('/cards', async (req, res) => {
  try {
    res.render('cards', { 
      layout: 'homepage', cards,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET single card
router.get('/cards/:id', withAuth, async(req, res) => {
  try {
    const card = cards[req.params.id-1];
    // console.log(card);

    if (!card) {
      res.status(404).json({ message: 'No card found with this id!' });
      return;
    }
    res.render('card', { 
      layout: 'homepage', card,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET about
router.get('/about', withAuth, async(req, res) => {
  try {
    res.render('about', { 
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
