const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  username: { type: String, required: true, unique: true } ,
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  payment: { type: String },
  college: { type: String },
});

const User = mongoose.model('User', userSchema);
module.exports = User;