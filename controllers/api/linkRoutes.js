const router = require("express").Router();
const { Link, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const linkData = await Link.findAll({
      include: [
        { model: Comment, attributes: ['comment']
      }
    ]
    });
    // Serialize data so the template can read it
    const links = linkData.map((link) => link.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("link", {
      layout: "homepage",
      links,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  const body = req.body;
 
  try {
    await Link.create({
      ...body,
      user_id: req.session.user_id,
    });
    res.redirect('/');
  } catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

module.exports = router;
