////////////////////////////////
// Easy Going
////////////////////////////////

for(let i = 0; i <= 20; i++){
    console.log(i)
}



////////////////////////////////
// Get Even
////////////////////////////////

for(let i = 0; i <= 200; i += 2){
    console.log(i)
}



////////////////////////////////
// Fizz Buzz
////////////////////////////////

for(let i = 1; i <= 100; i++){
    if(i % 15 === 0) console.log("FizzBuzz")
    if(i % 3 === 0) console.log("Fizz")
    if(i % 5 === 0) console.log("Buzz")
    else console.log(i)
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////
<<<<<<< HEAD

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
=======
>>>>>>> e5973739 (Methods Revisited answered)

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2]++
// console.log(plantee)

// 2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"
// console.log(wolfy)

// 3.Give D'Art a second hometown by adding "Hawkins"
// dart[0] += " Hawkins"
// console.log(dart)

// 4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
// wolfy[0] = "Gameboy"
// console.log(wolfy)

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// const ninja = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// for(let items of ninja){
//     console.log(items.toUpperCase())
// }



////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = [
'Jaws', 
'The Fellowship of the Ring',
'Howl\'s Moving Castle',
'Django Unchained',
'Cloud Atlas',
'The Usual Suspects',
'Toy Story',
'Conan the Barbarian',
'Titanic',
'Harry Potter',
'Fried Green Tomatoes',
'Volver',
'Oculus',
'Seven',
'Black Panther',
'Harry Potter',
'Imitation of Life',
'Snatch',
'Fast and Furious'
];

<<<<<<< HEAD
console.log(favMovies[8])

// 1.use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// It changed the order of the elements inside the array, into alphabetical order. It permanently changed it.
favMovies.sort()
console.log(favMovies)
=======
// console.log(favMovies[8])

// 1.use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// It changed the order of the elements inside the array, into alphabetical order. It permanently changed it.
// favMovies.sort()
// console.log(favMovies)
>>>>>>> e5973739 (Methods Revisited answered)

// 2.Use the method pop
// It removes the last element insinde the array.
favMovies.pop()
<<<<<<< HEAD
console.log(favMovies)

// 3.push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")

// 4.Reverse the array
console.log(favMovies)
favMovies.reverse()
console.log(favMovies)

// 5. Use the shift method
console.log(favMovies.length)
favMovies.shift()
console.log(favMovies.length)

// 6.unshift - what does it return?
console.log(favMovies.unshift("1"))

// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// Splice permanently alters the array.
const index = favMovies.indexOf('Django Unchained')
// console.log(index)
favMovies.splice(index, 1)
favMovies.splice(3, 0, "Avatar")
=======
// console.log(favMovies)

// 3.push "Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy")

// 4.Reverse the array
// console.log(favMovies)
// favMovies.reverse()
// console.log(favMovies)

// 5. Use the shift method
// console.log(favMovies.length)
// favMovies.shift()
// console.log(favMovies.length)

// 6.unshift - what does it return?
// console.log(favMovies.unshift("1"))

// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// Splice permanently alters the array.
// const index = favMovies.indexOf('Django Unchained')
// console.log(index)
// favMovies.splice(index, 1)
// favMovies.splice(3, 0, "Avatar")
>>>>>>> e5973739 (Methods Revisited answered)
// console.log(favMovies)


// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// It does not alter the original array.
<<<<<<< HEAD
const midwayOdd = Math.floor((favMovies.length / 2))
// console.log(favMovies[midwayOdd])

// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
const halfway = favMovies.slice(midwayOdd, favMovies.length)

// 10. console.log your final results
console.log(halfway + "    Hiiiiii")

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// -1 is returned
console.log(favMovies.indexOf("Fast and Furious"))
=======
// const midwayOdd = Math.ceil((favMovies.length / 2) - 1)
// console.log(favMovies[midwayOdd])

// 9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// const halfway = favMovies[midwayOdd]

// 10. console.log your final results
// console.log(halfway)

// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// -1 is returned
// console.log(favMovies.indexOf("Fast and Furious"))
>>>>>>> e5973739 (Methods Revisited answered)

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// No because we dont want anyone to change what the variable holding the array to any other data types. Only an array should be contained in this variable, but what is inside the array can change.



////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]
];

whereIsWaldo.splice(1, 1)
whereIsWaldo[1][2] = "No One"
console.log(whereIsWaldo[2][1][1])




////////////////////////////////
//  Excited Kitten
////////////////////////////////

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
<<<<<<< HEAD
for(let i = 1; i <= 20; i++){
    console.log("Love me, pet me! HSSSSSS!")
}
=======
// for(let i = 1; i <= 20; i++){
//     console.log("Love me, pet me! HSSSSSS!")
// }
>>>>>>> 3d420736 (Excited Kittens answered)

// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let count = 0

while(count <= 20){
    
    const random = Math.round(Math.random() * 2) + 1

    if(random === 1) console.log("...human...why you taking pictures of me?...")
    if(random === 2) console.log("...the catnip made me do it...")
    else console.log("...why does the red dot always get away...")

    count += 2
}



////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort((a, b) => a - b)
console.log(nums[Math.ceil(nums.length / 2)])



// Part II: HTML & CSS ------------>
// 5 - I got this! I am ready to code


// // fib ----->
// let fibCount = 0
// let fibNum = 1
// while(fibCount < 20){
//     fibNum += fibNum
//     console.log(fibNum)
//     fibCount++
// }


// checker ----->
// const boardSize = 8;
// const arr = []
// for(let i = 1; i <= boardSize / 2; i++){
//     for(let j = 1; j <= boardSize / 2; j++){
//         arr.push("*")
//     }
// }
// console.log(arr)