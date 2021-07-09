const router = require('express').Router();
const userRoutes = require('./userRoutes');
const linkRoutes = require('./linkRoutes');
const commentRoutes = require('./commentRoutes');

// end point is /api 
router.use('/users', userRoutes);
router.use('/links', linkRoutes);
router.use('/comments', commentRoutes);

// export
module.exports = router;