const router = require('express').Router();
const userRoutes = require('./userRoutes');

// end point is /api 
router.use('/users', userRoutes);

// export
module.exports = router;