const { urlencoded } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const { pokemon, Favorite } = require('./models/pokemonModels')
const pokemonList = require('./models/pokemon')
const methodOverride = require('method-override')
const app = express()

// Allows for use of style.css and other external files in publics folder
app.use(express.static(__dirname + '/public'))
// Allows for data from form to be used
app.use(urlencoded({extended: true}))
// Allows for form to use all CRUD methods
app.use(methodOverride('_method'))



// listens for a get request from root, renders every single pokemon in db
app.get('/', (req, res) => {

    // passes all objects inside pokemons collection to homepage.ejs
    pokemon.find({}, (error, allPokemon) => {
        res.render('homepage.ejs', {allPokemon: allPokemon})
    }).sort({id:1})
})


// listens for a get request from fav.ejs. passing array of pokemon to fav.ejs rendering it all
app.get('/Favorites', (req, res) => {
    Favorite.find({}, (err, allPokemon) => {
        res.render('fav.ejs', {allPokemon})
    })

})

// listens for a get request with an db id, renders pokedex.ejs with 1 pokemons data
app.get('/:id', (req, res) => {

    // passes db id in url to findById method to search pokemons collection for matching.
    pokemon.findById(req.params.id, (error, pokemon) => {
        res.render('pokedex.ejs', {poke: pokemon})
    })
})

// renders new.ejs on get request. This file/route has a form for creating custom pokemon
app.get('/new/pokemon', (req, res) => {
    res.render('new.ejs')
})

// Sends user to a form page that allows user to edit pokemon. The pokemon to be edited is determined by the id passed in as param.
app.get('/edit/:id', (req, res) => {
    pokemon.findById(req.params.id, (err, poke) => {
        res.render('edit.ejs', {poke})
    })
})

// adds pokemon object to favoriteArr, when "add to favorite" button is clicked in the root route.
// app.post('/Favorites/:id', (req, res) => {
//     // pokemon.findById(req.params.id, (err, item) => {
//     //     console.log(item)
//     //     item.pokemon_id = 
//     //     Favorite.create(item, (err, newItem) => {
//     //         console.log(newItem)
//     //     })
//     // })
// })

// adds a new pokemon custom pokemon to pokemon db from the new.ejs aka /new/pokemon route
app.post('/new/pokemon', (req, res) => {
    pokemon.create(req.body, () => {
        res.redirect('/')
    })
})

// deletes pokemon
app.delete('/:id/delete', (req, res) => {
    pokemon.findByIdAndRemove(req.params.id, (err, poke) => {
        res.redirect('/')
    })
})

// Upon put request being made. ID of specific pokemon will be passed in with new data to update that pokemon in db.
app.put('/edit/:id', (req, res) => {
    pokemon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
        res.redirect('/')
    })
})






// express starts a server on localhost 3000
app.listen(3000)

// Connect to mongodb and create pokedex db
mongoose.connect('mongodb://localhost:27017/pokedex', () => {
    console.log('The connection with mongod is established')
})


// ============= Adds pokemon to db ====================

// pokemon.create(pokemonList, (error, createdPoke) => {
//     console.log(createdPoke)
// })


// Favorite.create(pokemonList, (error, createdPoke) => {
//     console.log(createdPoke)
// })

// =============== Removes collection =================
// pokemon.collection.drop()

// Favorite.collection.drop()


