const express = require('express');
const app = express()
const skills = require('./models/skills.js')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.get('/skills', (req, res) => {
    res.render('skills.ejs', {
        mySkills:skills
    })
})

app.get('/skills/:id', (req, res) => {
    res.send(`skill description: ${skills[req.params.id]}`)
})

app.listen(3000, () => {
    console.log('listening')
})