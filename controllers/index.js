// router module from express
const router = require('express').Router();

// home routes
const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);

// api routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// export
module.exports = router;
