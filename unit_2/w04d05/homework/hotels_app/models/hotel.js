const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please type in a name!"],
        unique: true
    },
    location: String,
    rating: {
        type: Number,
        max: 5,
        min: 0,
        default: 0
    },
    vacancies: Boolean,
    tags: [String],
    rooms: [ { roomNumber: Number, size: String, price: Number, booked: Boolean  } ]
}, {timestamps: true})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel