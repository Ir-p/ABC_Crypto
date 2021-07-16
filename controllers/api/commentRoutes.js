// routes and models
const router = require('express').Router();
const { Comment } = require('../../models');

// helper to check if user is logged in
const withAuth = require('../../utils/auth');

// CREATE new comment
router.post('/', withAuth, async(req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE comment by ID
router.put('/:id', withAuth, async(req, res) => {
  try {
    const commentData = await Comment.update(
      { comment: req.body.comment },
      { where: { id: req.params.id } }
    );
  
    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
  
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE comment by ID
router.delete('/:id', withAuth, async(req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: { id: req.params.id }
    });
  
    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
  
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;