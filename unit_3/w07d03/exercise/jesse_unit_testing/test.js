const add = require('./add.js')


//scenario 1: user passes two numbers in as parameters
console.log('add() should return the sum of two numbers')
if (add(3,4) === 7) {
    console.log('-- passed!')
} else {
    console.log("-- failed")
}

// scenario 2: what if the numbers being input as params were STRINGS *DUN DUN DUN*
console.log('add() should return the sum of two numbers BUT account for possible string input')
if (add('1','1') === 2) {
    console.log('-- passed')
} else {
    console.log('-- failed')
}
