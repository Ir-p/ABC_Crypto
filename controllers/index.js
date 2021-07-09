// router module from express
const router = require("express").Router();

// api routes
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// my comment routes
const commentRoutes = require('./commentRoutes');
router.use('/comments', commentRoutes);

// home routes
const homeRoutes = require("./homeRoutes");
router.use("/", homeRoutes);

// export
module.exports = router;
