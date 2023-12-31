const {model, Schema} = require('mongoose');

const userSchema = new Schema({
  netID: { type: String, required: true, unique: true } ,
  firstName: { type: String, required: true },
  middleInitial: {type: String, required: false, maxLength: 1},
  lastName: {type:String, required:true},
  password: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  payment: { type: String, required: true },
  college: { type: String, enum: ["Baker", "Jones", "McMurtry", "Will Rice", "Sid Richardson", "Lovett", "Duncan", "Brown", "Martel", "Hanszen", "Weiss"]},
});

 //Email AND NetID already in database error handling
userSchema.post('save', function(error, doc, next) {
    if (error.email === 'MongoServerError' && error.code === 11000) {
      next(new Error('Email already in use'));
    } else {
      next();
    }
    if (error.netID === 'MongoServerError' && error.code === 11000) {
        next(new Error('netID already in use'));
      } else {
        next();
      }
  });

module.exports =  model('User', userSchema);