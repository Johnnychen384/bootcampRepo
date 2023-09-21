const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome!')
})

app.get('/Homer', (req, res) => {
    res.send('<h1>Homer!</h1>')
})

app.get('/Marge', (req, res) => {
    res.send('<h1>Marge!</h1>')
})

app.get('/Bart', (req, res) => {
    res.send('<h1>Bart!</h1>')
})

app.get('/Lisa', (req, res) => {
    res.send('<h1>Lisa!</h1>')
})

app.get('/Maggie', (req, res) => {
    res.send('<h1>Maggie!</h1>')
})

app.get('/Snowball-II', (req, res) => {
    res.send('<h1>Snowball!</h1>')
})

app.get('/Santa\'s-Little-Helper', (req, res) => {
    res.send('<h1>Santa!!</h1>')
})


app.listen(3000, () => {
    console.log("Hi Johnny!")
})