var mongoose = require('mongoose');
var Schema = mongoose.Schema

var movieSchema = new Schema({
  title: String,
  poster: String,
  genre: String,
  movie_id: String
})

module.exports = mongoose.model('Movie', movieSchema);