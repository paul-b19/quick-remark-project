const mongoose = require('mongoose');
const {Schema} = mongoose;

const remarkSchema = new Schema({
  title: String,
  body: String,
})

mongoose.model('remarks', remarkSchema);