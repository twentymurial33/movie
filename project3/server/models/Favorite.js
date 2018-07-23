var mongoose = require('mongoose');


var favoriteSchema = new mongoose.Schema({
  movie_id: String,
  amount: Number
})

module.exports = mongoose.model('Favorite', favoriteSchema);