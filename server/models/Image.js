const { model, Schema } = require('mongoose');


const imageSchema = new Schema({
    name : { type: String, required: true },
    URL: { type: String, required: true }
});


module.exports = model('Image', imageSchema);