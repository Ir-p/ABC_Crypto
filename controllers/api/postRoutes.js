// routes and models
const router = require('express').Router();
const { Comment } = require('../../models');

// helper to check if user is logged in
const withAuth = require('../../utils/auth');

// All posts
router.get('/', async(req, res) => {
  try {
    const postData = await Comment.findAll();

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET single post by ID
router.get('/:id', withAuth, async(req, res) => {
  try {
    const postData = await Comment.findByPk(req.params.id);

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new post
router.post('/', withAuth, async(req, res) => {
  try {
    const postData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE post by ID
router.put('/:id', withAuth, async(req, res) => {
  try {
    const postData = await Comment.update(
      {
        comment: req.body.comment
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
  
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
  
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE post by ID
router.delete('/:id', withAuth, async(req, res) => {
  try {
    const postData = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
  
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }
  
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;