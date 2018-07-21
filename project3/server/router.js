var express = require("express");
// var router = express.router();
console.log("sup")

router.route("/movies.json").get(index);

router.post('/favorite', (req,res)=> {
    console.log(req.body)
    res.json({res: req.body})
})

module.exports = router;