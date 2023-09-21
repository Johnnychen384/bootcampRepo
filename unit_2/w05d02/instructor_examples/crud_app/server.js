const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const fruitSeed = require('./models/fruitSeed.js')
const Fruit = require('./models/fruits.js')

//SEED ROUTE
app.get('/fruits/seed', (req, res) => {
  Fruit.create(fruitSeed, (err, createdFruits) => {
    res.redirect('/fruits')
  })
})

// GET/RENDER ROUTES
app.get('/fruits/new', (req, res) => {
   res.render('new.ejs')
})

app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render('index.ejs', {
      fruits: allFruits
    })
  })
})

app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('show.ejs', {
      fruit: foundFruit
    })
  })
})

app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('edit.ejs', {
      fruit: foundFruit
    })
  })
})


//ACTION ROUTES
app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on'){
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits')
  })
})

app.delete('/fruits/:id', (req, res) => {
  Fruit.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/fruits')
  })
})

app.put('/fruits/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }

  Fruit.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
    res.redirect(`/fruits/${req.params.id}`)
  })
})



app.listen(3000, () => {
   console.log('listening')
})

mongoose.connect('mongodb://localhost:27017/basiccrud', () => {
  console.log('connection with mongo is established') 
})
