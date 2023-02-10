const mongoose = require('mongoose')

const catalogModel = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: String,
        required: true,
        trim: true,
    }
})

module.exports = mongoose.model("catalogData", catalogModel)