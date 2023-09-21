const mongoose = require("mongoose") 

const animalSchema = new mongoose.Schema({
    name: String,
    species: String,
    image: String,
    reservedForAdoption: {type: Boolean, default: false},
    breed: String,
    age: Number
  })

const Animals = mongoose.model('Animal', animalSchema)

module.exports = Animals
