var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
})
  

mongoose.model('User', UserSchema);

