const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true
    },
    item: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
        quantity: {
            type: Number,
            required: true
        },
    }]
}, {
    timestamps: true
})

module.exports = Order = mongoose.model('order', OrderSchema)