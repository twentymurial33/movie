var express = require('express');
var path = require('path');
var router = express.Router();
var models = require('./../models');

sequelize.connect(url, function (err, db) {
	if (err) {
	  console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
	  console.log('Connection established to', url);
	}
   });

   app.get('/', function(req, res) {
	res.json('you did it');
  });
  
  //get list of the Favorite Movies//
  app.get('/api/MovieList', function(req, res) {
	MovieList.find({}).then(eachOne => {
	  res.json(eachOne);
	  })
	})
 
	app.post('/api/MovieList', function(req, res) {
		MovieList.create({
		//   guestSignature: req.body.SignatureOfGuest,
		//   message: req.body.MessageofGuest,
		}).then(signature => {
		  res.json(signature)
		});
	  });
	
module.exports = router;