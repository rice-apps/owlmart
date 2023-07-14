const { model, Schema } = require('mongoose');


const imageSchema = new Schema({
    name : { type: String, required: true },
    URL: { type: String, required: true }
});


const Image = model('Image', imageSchema);
module.exports = Image;