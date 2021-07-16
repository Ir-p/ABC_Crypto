// routes and models
const router = require('express').Router();
const { Comment, Link, User } = require('../models');

// helper to check if user is logged in
const withAuth = require('../utils/auth');

// my comments 
router.get('/', withAuth, async(req, res) => {
  try{
    const linkData = await Link.findAll({
      include: [{  
        model: Comment, attributes: ['id', 'comment', 'date_created'],
        include: [{ model: User }],
        where: {user_id: req.session.user_id} 
      }]
    });
    const links = linkData.map((link) => link.get({ plain: true }));
    console.log('links:', links);
    // Pass serialized data and session flag into template
    res.render("mycomments", {
      layout: "homepage",
      links,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
      username: req.session.user,
      user_id: req.session.user_id
    }); 
  } catch (err) {
    res.status(500).json(err);
  }    
});

// new comment 
router.get('/new', withAuth, async (req, res) => {
  try {
    const linkData = await Link.findAll({
    });
  
    // Serialize data so the template can read it
    const links = linkData.map((link) => link.get({ plain: true }));
    // console.log(links);
    res.render('new-comment', { 
      layout: 'homepage',
      links, 
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit comment 
router.get('/edit/:id', withAuth, async(req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [{ model: Link, attributes: ['link', 'name'] }]
    });

    // serialize the data
    const comment = commentData.get({ plain: true });
    // console.log(comment);

    // res.status(200).json(commentData);
    res.render('edit-comment', { 
      layout: 'homepage', 
      ...comment, 
      logged_in: req.session.logged_in,
      user_name: req.session.user_name 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;