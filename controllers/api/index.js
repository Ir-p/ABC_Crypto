const router = require('express').Router();
const userRoutes = require('./userRoutes');
const linkRoutes = require('./linkRoutes');
const postRoutes = require('./postRoutes');

// end point is /api 
router.use('/users', userRoutes);
router.use('/links', linkRoutes);
router.use('/posts', postRoutes);

// export
module.exports = router;