const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const { urlencoded } = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Welcome!! ALl!</h1>
            </body>
        </html>
    `)
})

app.get('/calculator', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/calculator', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const total = num1 + num2
    console.log(total)

    res.send("Total is " + total)
})




app.listen(3000, () => {
    console.log("hi")
})