const mongoose = require('mongoose')

// Pokemon Schema or blueprint for how the object will be structured when passed to mongodb
const pokemonSchema = new mongoose.Schema({
    _id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Favorite'}],
    id: {type: String, required: true},
    name: {type: String, required: true},
    img: {type: String, default: "https://placeholder.pics/svg/300"},
    type: [String],
    stats: {
        hp: {type: String, default: "1"},
        attack: {type: String, default: "1"},
        defense: {type: String, default: "1"},
        spattack: {type: String, default: "1"},
        spdefense: {type: String, default: "1"},
        speed: {type: String, default: "1"},
    },
    damages: {
        normal: {type: String, default: "1"},
        fire: {type: String, default: "1"},
        water: {type: String, default: "1"},
        electric: {type: String, default: "1"},
        grass: {type: String, default: "1"},
        ice: {type: String, default: "1"},
        fight: {type: String, default: "1"},
        poison: {type: String, default: "1"},
        ground: {type: String, default: "1"},
        flying: {type: String, default: "1"},
        psychic: {type: String, default: "1"},
        bug: {type: String, default: "1"},
        rock: {type: String, default: "1"},
        ghost: {type: String, default: "1"},
        dragon: {type: String, default: "1"},
        dark: {type: String, default: "1"},
        steel: {type: String, default: "1"}
    }
})

const pokemon = mongoose.model('Pokemon', pokemonSchema)





const favoriteSchema = new mongoose.Schema({
    pokemon_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon'}],
    id: {type: String, required: true},
    name: {type: String, required: true},
    img: {type: String, default: "https://placeholder.pics/svg/300"},
    type: [String],
    stats: {
        hp: {type: String, default: "1"},
        attack: {type: String, default: "1"},
        defense: {type: String, default: "1"},
        spattack: {type: String, default: "1"},
        spdefense: {type: String, default: "1"},
        speed: {type: String, default: "1"},
    },
    damages: {
        normal: {type: String, default: "1"},
        fire: {type: String, default: "1"},
        water: {type: String, default: "1"},
        electric: {type: String, default: "1"},
        grass: {type: String, default: "1"},
        ice: {type: String, default: "1"},
        fight: {type: String, default: "1"},
        poison: {type: String, default: "1"},
        ground: {type: String, default: "1"},
        flying: {type: String, default: "1"},
        psychic: {type: String, default: "1"},
        bug: {type: String, default: "1"},
        rock: {type: String, default: "1"},
        ghost: {type: String, default: "1"},
        dragon: {type: String, default: "1"},
        dark: {type: String, default: "1"},
        steel: {type: String, default: "1"}
    }
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = {pokemon, Favorite}