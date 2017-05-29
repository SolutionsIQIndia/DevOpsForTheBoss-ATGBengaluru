var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    itemname: { type: String, required: true },
    itemprice: { type: Number, required: true },
    quantity: { type: Number },
    sizes: {type: String },
  }
);

module.exports = mongoose.model('product', ProductSchema);
