const cookware = 'rachel ray pots and pans'
const grocery = ['bread','milk','produce','dayquil', 'trash bags', cookware, 40.00]
// console.log(grocery)
const nums = [1,4,7,888,345]
// console.log(nums)

const stuff = ['thing 1','thing 2','thing 3']
// console.log(stuff[2])

// const satchel = ['yurt', 'mattress', 'candle', 'map', 'trendy sunglasses', 'rupees', 'Pepto Bismol', 'boomerang']
// console.log(satchel[2])

// console.log(satchel.length)


// ACCESSING ARRAY ELEMENTS
// const drSeussBooks = [
//     'Cat in the Hat',
//     'Green Eggs and Ham',
//     'Grinch',
//     'Thing One',
//     'Thing Two',
//     'Cindy Loo Who',
//     'JoJo McDodd',
//     '8th book',
//     'newest book'
//   ]
//   console.log(drSeussBooks[0])
//   const third = drSeussBooks[2]
//   console.log(third)
//   let lastElementIndex = drSeussBooks.length - 1
//   console.log(drSeussBooks[lastElementIndex])

// CHANGING ARRAY ELEMENTS

// const satchel = [
//     'yurt',
//     'mattress',
//     'candle',
//     'map',
//     'trendy sunglasses',
//     'rupees',
//     'Pepto Bismol',
//     'boomerang'
//   ]
//   console.log(satchel[2])
//   satchel[2] = 99
//   console.log(satchel[2])
const drSeussBooks = [
    'Cat in the Hat',
    'Green Eggs and Ham',
    'Grinch',
    'Thing One',
    'Thing Two',
    'Cindy Loo Who',
    'JoJo McDodd',
    '8th book',
    'newest book'
  ]
  drSeussBooks[4] = null
//   console.log(drSeussBooks)
//   drSeussBooks.push('pyjama pants')
drSeussBooks[drSeussBooks.length] = 'pyjama pants'
//   console.log(drSeussBooks)

const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
squares[0] *= 10
// console.log(squares)







const shortArray = ['first', 'middle1','middle2', 'last']

let arrLen = shortArray.length
// console.log(arrLen)
let midPt = arrLen / 2
// console.log(midPt)
shortArray[midPt]
// console.log(shortArray[midPt])
const actualMiddleElements = [shortArray[midPt - 1], shortArray[midPt]]
// console.log(actualMiddleElements)

// ODD LENGTH ARRAYS -- ROUND MID PT DOWN TO FIND ACTUAL MIDDLE ELEMENT
// EVEN LENGTH ARRAYS -- USE MIDPT & MIDPT - 1 AS THE 2 MIDDLE ELEMENTS







shortArray[Math.floor(shortArray.length/2)]
// console.log(shortArray[Math.floor(shortArray.length/2)])


// LOOPING: Iterating Over Arrays

const satchel = [
    'yurt',
    'mattress',
    'candle',
    'map',
    'trendy sunglasses',
    'rupees',
    'Pepto Bismol',
    'boomerang'
  ]

// for (let i = 0; i < satchel.length; i++) {
//     if (i % 2 === 0) {
//         console.log("Even numbered item", satchel[i])
//     }
// }


// const testScores = [
//     100,
//     58,
//     68,
//     78,
//     88,
//     90,
//     95
// ]

// for (let i = 0; i < testScores.length; i++) {
//     if (testScores[i] >= 85) {
//         console.log("Look mom,", testScores[i])
//     } else {
//         console.log("Don't look at that...", testScores[i])
//     }
// }

const pairs = [
    ['Harald', 'Kumar'],
    ['Laurel', 'Hardy']
]
// console.log(pairs[0][1])
// console.log(pairs.length)
// console.log(pairs[0][0] = "Harold")

// pairs[0] is literally ['Harold', 'Kumar']



// ARRAY METHODS
  //1. Index Of
  // Returns the position of the FIRST occurence of a specified value
  const animals = [
    'dog',
    'cat',
    'giraffe',
    'goat',
    'orangutan',
    'giraffe'
  ]

  console.log(animals.indexOf('giraffe'))
  console.log(animals.indexOf('giraffe',3))

  // 2. Push
  // Opposite of pop, it adds one or more elements to the end of an array
  const instructors = [
    'brendan',
    'joy',
    'jesse'
  ]
  instructors.push('isaac')
  console.log(instructors)

// 6
//   Methods
// shift
// shift will remove the first element in an array. If you assign a variable to exampleArray.shift(), it will remove the first element from exampleArray and save that first element into a variable
// An array of fruits
// const fruits = [
//     "Banana",
//     "Orange",
//     "Apple",
//     "Mango"
// ]
// Removes the first item in array (banana) and assigned it to the variable firstFruit
// const firstFruit = fruits.shift()

// console.log(fruits)
// returns [ 'Orange', 'Apple', 'Mango' ]
// console.log(firstFruit)
// returns Banana