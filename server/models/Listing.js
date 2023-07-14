const { model, Schema } = require('mongoose');
const Image = require('./Image.js')

const categories = {
    clothes: 0,
    furniture: 1,
    technology: 2,
    jewelry: 3,
    service: 4,
    other: 5
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