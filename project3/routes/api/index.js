const router = require("express").Router();
const bookRoutes = require("./favoriteMovies");

// Book routes
router.use("/favoriteMovies", movieRoutes);

module.exports = router;