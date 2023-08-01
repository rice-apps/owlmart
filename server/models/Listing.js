const { model, Schema } = require('mongoose');
const Image = require('./Image.js');

const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  active: { type: Boolean, required: true },
  pictures: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
  pickup: {type: Boolean, required: true },
  category: { type: String, enum: ['CLOTHES', 'FURNITURE', 'TECHNOLOGY', 'JEWELRY', 'SERVICE', 'OTHER']}
});

module.exports = model('Listing', listingSchema);
