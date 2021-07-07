const router = require('express').Router();
const userRoutes = require('./userRoutes');
const linkRoutes = require('./linkRoutes');

// end point is /api 
router.use('/users', userRoutes);
router.use('/links', linkRoutes);

// export
module.exports = router;