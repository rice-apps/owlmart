const { model, Schema } = require('mongoose');
const Image = require('./Image.js')

const categories = {
    CLOTHES: 0,
    FURNITURE: 1,
    TECHNOLOGY: 2,
    JEWELRY: 3,
    SERVICE: 4,
    OTHER: 5
}

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  active: { type: Boolean, required: true },
  pictures: [Image],
  pickup: Boolean,
  category: categories
});


const Listing = model('Listing', listingSchema);
module.exports = Listing;