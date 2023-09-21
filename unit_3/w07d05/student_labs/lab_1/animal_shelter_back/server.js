const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Animal = require('./models/Animals')

app.use(express.json())
app.use(cors())


app.post('/animals/add', (req, res) => {
    Animal.create(req.body, (error, data) => {
        res.json(data)
    })
})

app.get('/animals', (req, res) => {
    Animal.find({}, (error, data) => {
        res.json(data)
    })
})

app.delete('/animals/delete/:id', (req, res) => {
    Animal.findByIdAndRemove(req.params.id, (error, deletedData) => {
        res.json(deletedData)
    })
})

app.put('/animals/edit/:id', (req, res) => {
    Animal.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedData) => {
        res.json(updatedData)
    })
})

app.listen(3000)

mongoose.connect('mongodb://localhost:27017/animalshelter')
mongoose.connection.once('open', () => {
   console.log('connected to mongod...')
})