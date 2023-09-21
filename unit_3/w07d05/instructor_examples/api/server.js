const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const People = require('./models/people.js')

app.use(express.json())
app.use(cors())

app.post('/people', (req, res) => {
  console.log(req)
  People.create(req.body, (err, createdPerson) => {
    console.log(req.body)
    res.json(createdPerson)
  })
})

app.get('/people', (req, res) => {
  People.find({}, (err, foundPeople) => {
    res.json(foundPeople)
  })
})

app.delete('/people/:id', (req, res) => {
  People.findByIdAndRemove(req.params.id, (err, deletedPerson) => {
    res.json(deletedPerson)
  })
})

app.put('/people/:id', (req, res) => {
  People.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPerson) => {
    res.json(updatedPerson)
  })
})

app.listen(3000, () => {
   console.log('listening...')
})


mongoose.connect('mongodb://localhost:27017/peoplecrud')
mongoose.connection.once('open', () => {
   console.log('connected to mongod...')
})