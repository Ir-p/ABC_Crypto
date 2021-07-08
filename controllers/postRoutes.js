// routes and models
const router = require('express').Router();
const { Comment, Link, User } = require('../models');

// helper to check if user is logged in
const withAuth = require('../utils/auth');

// my posts 
router.get('/', withAuth, async(req, res) => {
  try {
    const postData = await Comment.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        { model: User, attributes: ['first_name', 'last_name'] },
        { model: Link, attributes: ['link', 'name'] }
    ]
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    // console.log(posts);
    
    // res.status(200).json(postData);
    res.render('myposts', { 
      layout: 'homepage', 
      posts, 
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// all posts 
router.get('/all', withAuth, async(req, res) => {
  try {
    const postData = await Comment.findAll({
      include: [
        { model: User, attributes: ['first_name', 'last_name'] },
        { model: Link, attributes: ['link', 'name'] }
    ]
    });

    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    
    // res.status(200).json(postData);
    res.render('allposts', { 
      layout: 'homepage', 
      posts, 
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/all', withAuth, async(req, res) => {
//   try {
//     const linkData = await Link.findAll({
//     });

//     // serialize the data
//     const links = linkData.map((link) => link.get({ plain: true }));
//     // console.log(posts);

//     links.forEach(link => {
//       console.log(link);
//       try {
//         const postData = Comment.findAll({
//           where: {
//             link_id: link.id
//           },
//           include: [
//             { model: User, attributes: ['first_name', 'last_name'] },
//           ]
//         });
//         const posts = postData.map((post) => post.get({ plain: true }));
//         console.log(posts);
//         return postData;
//         // link.posts = posts;
        
//       } catch (err) {
//         res.status(500).json(err);
//       }

//     });
//     console.log(links);

//     res.status(200).json(postData);
//     res.render('allposts', { 
//       layout: 'homepage', 
//       posts, 
//       logged_in: req.session.logged_in,
//       user_name: req.session.user_name
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
// new post 
router.get('/new', withAuth, async (req, res) => {
  try {
    const linkData = await Link.findAll({
    });
  
    // Serialize data so the template can read it
    const links = linkData.map((link) => link.get({ plain: true }));
    console.log(links);
    res.render('new-post', { 
      layout: 'homepage',
      links, 
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit post 
router.get('/edit/:id', withAuth, async(req, res) => {
  try {
    const postData = await Comment.findByPk(req.params.id, {
      include: [{ model: Link, attributes: ['link', 'name'] }]
    });

    // serialize the data
    const post = postData.get({ plain: true });
    // console.log(post);

    // res.status(200).json(postData);
    res.render('edit-post', { 
      layout: 'homepage', 
      ...post, 
      logged_in: req.session.logged_in,
      user_name: req.session.user_name 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// export
module.exports = router;