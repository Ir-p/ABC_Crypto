const router = require("express").Router();
const { Link, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const linkData = await Link.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ["username"]
      //   },
      // ],
    });
    console.log("linkData:", linkData);
    // Serialize data so the template can read it
    const links = linkData.map((link) => link.get({ plain: true }));
    console.log("links:", links);
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

module.exports = router;
