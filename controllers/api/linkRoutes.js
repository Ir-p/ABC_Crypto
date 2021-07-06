const router = require("express").Router();
const { Link, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get('/cards', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const linkData = await Link.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = linkData.map((link) => link.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('link', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
