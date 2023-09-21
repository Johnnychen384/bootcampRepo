//======EASY GOING=========
// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// for (let i=0; i <= 200; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

//======FIZZ BUZZ==========
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }



//======WILD WILD LIFE=====
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2] += 1
// console.log(plantee[2])

// wolfy[3] = "Gotham City"
// console.log(wolfy)

// dart.push("Hawkins")
// console.log(dart)

// wolfy.shift()
// console.log(wolfy)
// wolfy.unshift("Gameboy")
// console.log(wolfy)

//======NINJA TURTLES======
const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// turtles.reverse()
// for (names of turtles) {
//     console.log(names.toUpperCase())
// }
// const turtles = ["Phil", "bob","kathy"]
// for (i of turtles) {
//     console.log(i.toUpperCase())
// }


//======METHODS & MOVIES=======
const favMovies = [
    'Jaws',
    'The Fellowship of the Ring',
    'Howls Moving Castle',
    'Django Unchained',
    'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.sort())
// let djangoIndex = favMovies.indexOf("Django Unchained")
// favMovies.splice(djangoIndex,0,"avatar", "Borat", "Saving Private Ryan", "Sound of Metal")
// console.log(favMovies)
// SLICE
// console.log(favMovies.length)
// const slicedHalf = favMovies.slice(Math.floor(favMovies.length/2), favMovies.length)
// console.log(slicedHalf)

//======WHERES WALDO=======
const whereIsWaldo = [
    ["Timmy", "Frank"], 
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
]

// whereIsWaldo.splice(1, 1)
// console.log(whereIsWaldo)

// whereIsWaldo[2].splice(2, 1, "No One")
// console.log(whereIsWaldo)

// console.log(whereIsWaldo[3][1][1])

//======EXCITED KITTEN=====

// const catQuotes = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// for (let i = 0; i < 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!")
//     if (i % 2 === 0) {
//         console.log(catQuotes[Math.floor(Math.random()*3)])
//     }
// }