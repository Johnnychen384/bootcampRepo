const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type:String, requred: true},
    readToEat: {type: Boolean, required: true}

})

const fruitCollection = mongoose.model('Fruit', fruitSchema)

module.exports = fruitCollection