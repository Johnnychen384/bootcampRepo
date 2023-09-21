// const logFirstElem = (arrayParam) => {
//     console.log(arrayParam[0]);
// }
//
// logFirstElem([1,3,5,8,0])

// const logAllElems = (arrayParam) => {
//     for(let i = 0; i < arrayParam.length; i++){
//         console.log(arrayParam[i]);
//     }
// }
//
// logAllElems([1,3,5,8,0])

// const logAllElemsTwice = (arrayParam) => {
//     for(let i = 0; i < arrayParam.length; i++){
//         console.log(arrayParam[i]);
//         console.log(arrayParam[i]);
//     }
// }
//
// logAllElemsTwice([1,3,5,8,0])

const compareElems = (arrayParam) => {
    for(let i = 0; i < arrayParam.length; i++){
        for(let j = 0; j < arrayParam.length; j++){
            console.log(arrayParam[i], arrayParam[j]);
        }
    }
}

compareElems(['a', 'b', 'c', 'd'])
