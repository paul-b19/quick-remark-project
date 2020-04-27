const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  email: String,
  password: String,  // find out later !!!
  name: String
})

mongoose.model('users', userSchema);