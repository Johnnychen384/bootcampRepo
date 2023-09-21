const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Fruit = require('./models/fruits.js')
app.use(express.urlencoded({extended: true}))

app.get('/fruits/new', (req, res) => {
  res.render('new.ejs')
})


app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    console.log(allFruits)
    res.render('index.ejs', {allFruits: allFruits})
  })
  
})

app.get('/fruits/:id', (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render('show.ejs', {fruit: foundFruit})
  })
})


app.post('/fruits', (req, res) => {
  if(req.body.readToEat === 'on'){
    req.body.readToEat = true
  } else {
    req.body.readToEat = false
  }
  

  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits')
  })
})



app.listen(3000, () => {
  console.log('Listening')
})


mongoose.connect('mongodb://localhost:27017/basiccrud', () => {
  console.log('The connection with mongod is established')
})