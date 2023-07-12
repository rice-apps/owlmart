const { model, Schema } = require('mongoose');
const Image = require('./Image.js')


const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  active: { type: Boolean, required: true },
  Pictures: [Image]
});


const Listing = model('Listing', listingSchema);
module.exports = Listing;