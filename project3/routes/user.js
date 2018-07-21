//routes/user.js
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET user favorites. */
router.get('/favorites', function(req, res, next) {
    res.send(req.user);
});

module.exports = router;
