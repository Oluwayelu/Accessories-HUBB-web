const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
    }
}, {
    timestamps: true
})

module.exports = Product = mongoose.model('product', ProductSchema)