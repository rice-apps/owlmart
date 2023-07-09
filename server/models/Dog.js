const { model, Schema } = require('mongoose');

const dogSchema = new Schema({
  name: String,
});

module.exports = model('Dog', dogSchema);
