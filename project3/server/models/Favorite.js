var mongoose = require('mongoose');


var favoriteSchema = new mongoose.Schema({
  movie_id: String,
  amount: Number,
  href:String,
  title:String,
  thumbnail:String
})

module.exports = mongoose.model('Favorite', favoriteSchema);