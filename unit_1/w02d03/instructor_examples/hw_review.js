const prompt = require('prompt-sync')();

// // ACTORS---------------------
//     // Who/what is involved in this game?

//     const tools = [
//         {
//             name: 'teeth',
//             price: 0,
//             profit: 1
//         },
//         {
//             name: 'rusty scissors',
//             price: 5,
//             profit: 5
//         },
//         {
//             name: 'old timey lawnmower',
//             price: 25,
//             profit: 50
//         },
//         {
//             name: 'fancy lawnmower',
//             price: 250,
//             profit: 100
//         },
//         {
//             name: 'college students',
//             price: 500,
//             profit: 250
//         },
//     ]

//     const landscaper = {
//         bankAccount: 0,
//         currentTool: tools[toolIndex]
//     }

//     let toolIndex = 0
// // ACTIONS -------------------
//     // What are those things/people going to be doing?

//     //1. Cut grass
//         // Make money
//     //2. Upgrade tools
//     // Spend money
//     //3. Retire aka end the game
//     // Live/up to-to-date balance
//     // Go through the days


// const cutGrass = () => {
//     landscaper.bankAccount += landscaper.currentTool.profit 
//     console.log(landscaper.bankAccount)
// }

// const buyTool = () => {
//     toolIndex += 1
//     //landscaper.currentTool = tools[toolIndex + 1]
// }



// JOY


// LANDSCAPE GAME //

// Objects and Arrays//

let toolIndex = 0

const landscaper = {
    bankAccount: 0,
}

let tools = [{
    cutWith: 'teeth',
    price: 0,
    profit: 1,
}, {
    cutWith: 'rusty scissors',
    price: 5,
    profit: 5,
}, {
    cutWith: 'old-timey lawnmower',
    price: 25,
    profit: 50,
}, {
    cutWith: 'fancy lawnmower',
    price: 250,
    profit: 100,
}, {
    cutWith: 'starving college students',
    price: 500,
    profit: 250,
}]

// FUNCTIONS //
const cutAgain = () => {
    let reply = prompt('Do you want to cut the lawn? (yes/no) ')
    if (reply === 'yes') {
        console.log(`cut grass with ${tools[toolIndex].cutWith}`)
        cutGrass ()
    } else {
        console.log(`you did not earn profit today`)
        gameOver()
    } 
}

const buyTool = () => {
    console.log(`you have $${landscaper.bankAccount} in your bank account`)
    console.log(`Do you want to buy ${tools[toolIndex + 1].cutWith} for $${tools[toolIndex + 1].price}(yes/no)`)
    let reply = prompt('')
    if (reply === 'yes') {
        landscaper.bankAccount -= tools[toolIndex + 1].price
        toolIndex +=1
        cutAgain()
    } else {
    }
}

const cutGrass = () => {
    for (let i=0; i < tools.length; i++) {
        landscaper.bankAccount += tools[toolIndex].profit
        console.log(`You spent the day cutting the grass with ${tools[toolIndex].cutWith}.`)
    } if (landscaper.bankAccount < 1000 && landscaper.bankAccount >= tools[toolIndex + 1].price) {
        buyTool()
    } else if (landscaper.bankAccount >= 1000) {
        console.log('YOU HAVE WON THE GAME!  WELL DONE!')
    }
    
}

// GAMEPLAY //

cutGrass()


// Using your teeth - $1 per day
    // Use a loop to cut the grass until we've gotten $5 (5x) // logging how many "days"


// Buy pair of rusty scissors - $5 tools[1].price
    // Function? to purchase rusty scissors, subtracting our $5


// Using rusty scisors - $5 per day tools[1].profit
    // Use a loop to cut the grass until we have $25 (5x)


// Buy old-timey lawnmower - $25 tools[2].price
    // Function? to purchase old timey landmower, subtracting our $25


// Using lawnmower - $50 per day tools[2].profit
    // Use a loop to cut the grass until we have $250 (5x)


// Buy fancy lawnmower - $250 tools[3].price
    // Function? to purchase fancy lawnmower, subtracting our $250


// Using fancy lawnmower - $100 per day tools[3].profit
    // Use a loop to cut the grass until we have $500 (5x)


// Buy college students - $500 tools[4].price
    // Function? to purchase college students, subtracting $500


// Using college students - $250 per day tools[4].profit
    // Use a loop to cut the grass until we have $1000 (4x)


// Profit of $1000 wins/ends the game!
    // Function to end game when we get to $1000 and say we win!
