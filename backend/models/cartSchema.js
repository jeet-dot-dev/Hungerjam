const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    name: {
        type: String,
    },
    qnt: {
        type: Number,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: () => Math.floor(Math.random() * 21), // Random discount between 0 and 20
    },
    gst: {
        type: Number,
        default: () => Math.floor(Math.random() * 11) + 5, // Random GST between 5 and 15
    },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
