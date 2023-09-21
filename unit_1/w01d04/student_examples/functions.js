const printBanner = () => {
    console.log("====================")
    console.log(' Insert Banner Text')
    console.log("====================")
}

// for(let i = 0; i <= 10; i++){
//     printBanner()
// }


// const printSum = () => {
//     console.log(10 + 10)
// }

// printSum()


// const printTriangle = () => {
//     let toPrint = "#"
//     for(let i = 1; i <= 5; i++){
//         console.log(toPrint)
//         toPrint += "#"
//     }
// }

// printTriangle()

const calculateArea = (num1, num2) => {
    return num1 * num2
}

// calculateArea(3, 10)

// const minusOne = num => {
//     if(num < Infinity || num > -Infinity){
//         console.log(num - 1)
//     } else {
//         console.log("Not a number")
//     }
// }

// minusOne(2)

// const palindrome = (str1, str2) => {
//     const arr1 = str1.split('')
//     const arr2 = str2.split('')
//     const reversedArr1 = arr1.reverse()
//     const reversedArr2 = arr2.reverse()

//     if(arr1.join('') === arr2.join('')){
//         if(reversedArr1.join('') === reversedArr2.join('')) return true
//     }

//     return false
// }

// console.log(palindrome("lol", "loal"))


// const convertToString = (a, b, c) => {
//     const sum = a + b + c
//     return sum.toString()
// }

// console.log(typeof convertToString(1, 2, 3))