
const printBanner = () => {
  console.log('=================')
  console.log('Insert Banner Text')
  console.log('=================')
}

// printBanner()

// for (let i = 0; i <= 10; i++) {
//   printBanner()
// }

const printSum = () => {
   let  sum = 10 + 10
   console.log(sum)
   checkSum()
}

const checkSum = () => {
  if (20 === 20){
    console.log('yup')
   }
}

// printSum()



const checkInputLength = (input) => {
  if (input.length > 10) {
    console.log('input is more than 10')
  } else {
    console.log('input is less than 10')
  }
}


const sayName = name => {
  console.log(`Hello, my name is ${name} I live in the shire`)
}

// sayName('Frodo')
// sayName('Pippin')
// sayName('Sam')

// const addTwo =  (num) => {
//    console.log(num + 2)
// }

// addTwo(8)




// calculateArea(3, 10)

const minusOne = (num) => {
   console.log(num - 1)
}

// minusOne(8)

// const twenty = () => {
//    return 20
// }

// console.log(8 + twenty())

// const word = () => {
//    return 'hello'
// }

// console.log(`${word()} world!`)


// const calculateArea = (num1, num2) => {
//   return num1 * num2
// }

// // console.log(calculateArea(2, 10))

// console.log(calculateArea(calculateArea(2, 5), calculateArea(5, 10)))

const example = (input) => {
   if (input === 'none') {
    return 0
   }
   return 1
}

console.log(example('none'))
console.log(example('whatever'))

// const addStuff = () => {
//  return example('none') + example('whatever') 
// }

// console.log(addStuff())

//write the function (has a parameter expected to be a string)
  //reverse the word(?)
  //compare the original word to the reversed  word
    //how to use comparion operators to compare a string(?)
  //if  they are the same return true
  //else return false