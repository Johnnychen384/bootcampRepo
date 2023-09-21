const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const People = require('./models/people')


app.use(express.json())
app.use(cors())

app.post('/people', (req, res) => {
    People.create(req.body, (err, createdPerson) => {
        res.json(createdPerson)
    })
})

app.get('/people', (req, res) => {
    People.find({}, (err, data) => {
        res.json(data)
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
    console.log("listening")
})


mongoose.connect('mongodb://localhost:27017/merncrud')
mongoose.connection.once('open', () => {
    console.log("connected mongodb")
})