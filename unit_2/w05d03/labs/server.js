const { urlencoded } = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const Budget = require('./models/budgetSchema')
const allBudget = require('./models/budget')
const methodOverride = require('method-override')
const app = express()

app.use(express.static('public'))
app.use(urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    Budget.find({}, (error, items) => {
        let sum = 0

        for(let item of items){
            sum += item.amount
        }
        res.render('index.ejs', {items, sum})
    })
})

app.get('/:id/edits', (req, res) => {
    Budget.findById(req.params.id, (err, item) => {
        res.render('edit.ejs', {item})
    })
})

app.get('/show/:id', (req, res) => {
    Budget.findById(req.params.id, (err, item) => {
        res.render('show.ejs', {item})
    })
})

app.get('/new', (req, res) => {
    res.render('new.ejs')
})


app.post('/new', (req, res) => {
    Budget.create(req.body, (err, item) => {
        console.log(item)
    })
    res.redirect('/')
})

app.delete('/:id', (req, res) => {
    Budget.findByIdAndRemove(req.params.id, () => {
        res.redirect('/')
    })
})

app.put('/:id/edits', (req, res) => {
    Budget.findByIdAndUpdate(req.params.id, req.body, {new:true}, () => {
        res.redirect('/')
    })
})


app.listen(3000)

mongoose.connect('mongodb://localhost:27017/budget', () => {
    console.log('The connection with mongod is established')
})

// =============================

// Budget.create(allBudget, (error, collection) => {
//     console.log(collection)
// })