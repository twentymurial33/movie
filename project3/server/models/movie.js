var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  genre: String,
  
})

mongoose.model('Movie', movieSchema);