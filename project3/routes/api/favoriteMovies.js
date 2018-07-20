
const moviesController = require("../../controllers/movies");


router.route("/")
  .get(movies.findAll)
  .post(movies.create);


router
  .route("/:id")
  .get(movies.findById)
 

module.exports = router;