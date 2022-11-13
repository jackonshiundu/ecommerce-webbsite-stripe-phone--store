const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    device: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: Array, required: true },
    alt: { type: String, required: true },
    categories: [
      {
        color: { type: Array, required: true },
      },
    ],
    size: { type: Array },
    price: { type: Number, required: true },
    discountPrice: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
