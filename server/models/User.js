const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  netID: { type: String, required: true, unique: true } ,
  first_name: { type: String, required: true },
  middle_initial: {type: String, required: false},
  last_name: {type:String, required:true},
  password: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  payment: { type: String, required: true },
  college: { type: String, enum: ["Baker", "Jones", "McMurtry", "Will Rice", "Sid Richardson", "Lovett", "Duncan", "Brown", "Martel", "Hanszen", "Weiss"]},
});

const User = mongoose.model('User', userSchema);
module.exports = User;