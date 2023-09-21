// const exampleFunction = () => {
//    const num = 100
//    console.log(num  * num)
// }

// // exampleFunction()
// console.log(num)

//gloabally scoped variable
// const item = 'spicy meatball'

// const exampleFunciton2 = () => {
//   console.log(`${item} within the function`)
// }


// exampleFunciton2()

// const setItem = () => {
//    const item = 'spicy meatball'
//    return item
// }

// const getItem = () => {
//   return item 
// }

// console.log(getItem())

// const returnName = () => {
//    return 'Brendan'
// }

// const returnGreeting = () => {
//    return `oh hai ${returnName()}`
// }

// console.log(returnGreeting())


// {
//   var item = 'spicy meatball'
//   console.log(item)
// }

// {
//   let item = 'whatever'
//   console.log(item)
// }

// for (i = 0; i < 10; i++) {
//   console.log(`inside the block: ${i}`)
// }

// console.log(`Outside the block: ${i}`)

// x = 'whatever'
// console.log(x)

// if (true) {
//   const num = 100
// }

// console.log(num)

// const age = 21




// console.log(message)

// const buyBeer = (age) => {
//   let message = ''
//   if (age < 21) {
//     message = 'You cant buy beer'
//   } else {
//     message = 'You can buy beer'
//   }
//   return message
// }

// console.log(buyBeer(19))


// const words = 'thats a...'

{
  
  const start = 'mama  mia!'
  {
    console.log(start)
    console.log(words)
    
    {
      {
        const  item = 'spicy meatball'
        {
          
        }
      }
    }
    //cant log item here
    console.log(item)
  }
}



{
  let item = 'test'
}

console.log(item)