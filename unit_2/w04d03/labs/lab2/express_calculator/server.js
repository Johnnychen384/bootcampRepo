const express = require('express')
const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log('app is running on port: ', PORT)
})


app.get('/', (req, res) => {
    res.send("Welcome to my homepage")
})

app.get('/calc/:num1/:num2', (req, res) => {
    const number1 = req.params.num1
    const number2 = req.params.num2
    const total = Number(number1) + Number(number2)
    res.send("the sum is " + total);

})

app.get('/calcquery/:num1/:num2', (req, res) => {
    console.log(req.query.operator === "add")
    // if(req.query.operator === "add"){
    //     const number1 = req.query.num1
    //     console.log(number1)
    //     const number2 = req.query.num2
    //     console.log(number2)
    //     const total = Number(number1) + Number(number2)
    //     console.log("yay")
    //     res.send("Your total " + total)
    // }


    if(req.query.operator === "add"){
        const number1 = req.params.num1
        const number2 = req.params.num2
        const total = Number(number1) + Number(number2)
        res.send("the sum is " + total);
    }
    

});
