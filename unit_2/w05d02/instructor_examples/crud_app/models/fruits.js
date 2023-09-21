const mongoose = require('mongoose')

const fruitSchema = new mongoose.Schema({
  name: {type: String, required: true},
  color: {type: String, required: true},
  ripe: {type: Boolean, required: true}
})

const fruitCollection = mongoose.model('Fruit', fruitSchema)

module.exports = fruitCollection