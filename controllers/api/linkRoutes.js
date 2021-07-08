const router = require("express").Router();
const { Link, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  console.log("body:", body);
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
