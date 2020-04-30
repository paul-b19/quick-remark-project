const mongoose = require('mongoose')
const {Schema} = mongoose // const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,  // find out later !!!
  created: { type: Date, default: Date.now },
  remarks: [
    {
      title: String,
      body: String,
      flag: String,
      pinned: Boolean,
      created: { type: Date, default: Date.now },
      updated: { type: Date, default: Date.now }
    }
  ]
})

mongoose.model('users', userSchema)