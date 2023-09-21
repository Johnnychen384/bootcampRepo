// What is the difference between a parameter and an argument?
// A parameter is a data that you expect to be passed in when you create a function. It is usually represented by sometype of placeholder equal to a variable. An argument is what is in between the parathesis when a function is called.

//////////////////////////////////////////////////////////////////

// Within a function, what is the difference between return and console.log?
// Return within a function lets the function output data when that function is called. The data thats outputted can be used by other parts of your code. While console.log also outputs data but is only shown in your console or terminal and it cannot be used in your other code.

// ///////////////////////////////////////////////////////////////

// const checkPalindrome = str => {
//     const arr = str.toLowerCase().split('').reverse().join('')
    
//     if(str.toLowerCase() === arr) return true

//     return false;
// }

// console.log(checkPalindrome("Radar"));
// console.log(checkPalindrome("Borscht"));


//////////////////////////////////////////////////////////////////

// const sumArray = arr => {
//     return arr.reduce((prev, current) => prev + current)
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));


//////////////////////////////////////////////////////////////////

// const checkPrime = num => {
//     if(num < 2) return false
//     for(let i = 2; i < num; i++){
//         if(num % i === 0) return false

//     }

//     return true
// }


// Realized I didnt console.log the right thing. Worked on this with
// eyancea/tobi/benya/damarkus
// const printPrimes = num => {
//     for(let i = 1; i <= num; i++){
//         if(checkPrime(i)) console.log(i)
//     }
// }

// printPrimes(97)


//////////////////////////////////////////////////////////////////

// const randomMove = () => {
//     randomNumber = Math.floor(Math.random() * 3) + 1
//     if(randomNumber === 1) return "rock"
//     if(randomNumber === 2) return "paper"
    
//     return "scissors"
// }


// const rockPaperScissors = (user = randomMove()) => {
//     const computer = randomMove()
//     let userNum = 0
//     let computerNum = 0
    
//     if(user === "rock" && computer === "paper"){
//         computerNum++
//     } else if (user === "rock" && computer === "scissors"){
//         userNum++
//     } 

//     if(user === "paper" && computer === "rock"){
//         userNum++
//     } else if (user === "paper" && computer === "scissors"){
//         computerNum++
//     }

//     if(user === "scissors" && computer === "rock"){
//         computerNum++
//     } else if (user === "scissors" && computer === "paper"){
//         userNum++
//     }


//     if(userNum > computerNum) {
//         console.log(`computer chose ${computer}`)
//         console.log(`user chose ${user}`)
//         console.log(`${user} beats ${computer}, user wins!`)
//     }
//     else if (userNum < computerNum) {
//         console.log(`computer chose ${computer}`)
//         console.log(`user chose ${user}`)
//         console.log(`${computer} beats ${user}, computer wins!`)
//     }
//     else {
//         console.log(`computer chose ${computer}`)
//         console.log(`user chose ${user}`)
//         console.log('It is a tie!')
//     }
// }


// rockPaperScissors()


//////////////////////////////////////////////////////////////////

// const sumDigits = num => {
//     const arr = num.toString().split('')
//     return arr.reduce((prev, current) => +prev + +current)
// }

// console.log(sumDigits(42));



//////////////////////////////////////////////////////////////////

// const calculateSide = (sideA, sideB) => {
//     const sideC = (Math.pow(sideA, 2)) + (Math.pow(sideB, 2))
//     return Math.sqrt(sideC)
// }

// console.log(calculateSide(8, 6));


//////////////////////////////////////////////////////////////////

// const printTriangle = num => {
//     let toBePrinted = "#"
//     for(let i = 0; i < num; i++){
//         console.log(toBePrinted)
//         toBePrinted += "#"
//     }
// }

// printTriangle(7)

// const printReverseTri = num => {
//     let count = num
//     let toBePrinted = ""
    
//     while(count > 0){
//         toBePrinted += "#"
//         count--
//     }
    
//     const arr = toBePrinted.split('')

//     for(let i = num; i > 0; i--){
//         console.log(arr.join(''))
//         arr.pop()
//     }
// }

// printReverseTri(6)



//////////////////////////////////////////////////////////////////

// const secondNumbers = arr => {
//   const orderedArr = arr.sort((a, b) => a - b)
//   if(orderedArr.length > 3) {
//     console.log(`second highest: ${orderedArr[orderedArr.length - 2]}`)

//     console.log(`second lowest: ${orderedArr[1]}`)
//   }
  
// }

// secondNumbers([4,2,6,9,5])


//////////////////////////////////////////////////////////////////

// const uniqueString = str => {
//     const uniqueSet = new Set(str.split(''))
//     const uniqueWord = []

//     uniqueSet.forEach(letter => uniqueWord.push(letter))
//     return uniqueWord.join('')
// }

// console.log(uniqueString("helloworld"))



//////////////////////////////////////////////////////////////////

// const insertDash = num => {
//     let arr = num.toString().split('')
//     let resultArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0) {
//             resultArr.push("-")
//             resultArr.push(arr[i])
//         }
//         else resultArr.push(arr[i])
//     }
//     return resultArr.join('')
// }

// console.log(insertDash(454793));

