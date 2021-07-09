// router module from express
const router = require("express").Router();

// api routes
const apiRoutes = require("./api");
router.use("/api", apiRoutes);

// my post routes
const postRoutes = require('./postRoutes');
router.use('/posts', postRoutes);

// home routes
const homeRoutes = require("./homeRoutes");
router.use("/", homeRoutes);

// export
module.exports = router;
