const prompt = require('prompt-sync')();
<<<<<<< HEAD
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);


// VARIABLES

let dayCount = 0;

let restartGame = '';

//FUNCTIONS
const milestones =(player, shop)=> {
    for (let amount of shop) {
        if (player.bankAccount >= amount.cost) {
            console.log(`You can purchase the ${amount.name}!`);
        } 
    }
};

const showShop =(player, shop)=> {
    //show shop
    console.log(shop)
    let buyChoice = Number(prompt(`Do you wanna buy anything today? (1-${shop.length}) `))-1;
    console.log(buyChoice);
    console.log(0 <= buyChoice && buyChoice <= 3)
    if ( 0 <= buyChoice && buyChoice <= 3) {
        if (player.bankAccount >= shop[buyChoice].cost) {
            console.log(`Awesome! You just bought the ${shop[buyChoice].name}`);
            player.tools.push(shop[buyChoice]);
            shop.splice(buyChoice, 1); 
        } else {
            console.log('Insufficient funds for transaction.')
        }
    } else {
        console.log('Okay, you are not buying anything');
    }
};

const enterShop =(player, shop)=> {
// take a look at shop
    // you wanna buy something
    let shopChoice = prompt('Do you wanna take a look at the shop today? (yes or no) ');
    console.log('Awesome!');
    if (shopChoice.toLocaleLowerCase() === 'yes') {
        if (shop.length ===0) {
            console.log('Sorry, the shop is sold out.')
        } else {
            showShop(player, shop);
        }
    } else {
    console.log('Okay, let\'s move on then...')
    }
};

const workday =(player)=> {
    console.log('Take a look at your invetory.')
    console.log(player.tools)
    let toolChoice = Number(prompt(`Which tool would you like to use today? (1-${player.tools.length}) `))-1;
    console.log(`Awesome! You picked ${player.tools[toolChoice].name}`);
    // profit and day count
    player.bankAccount += player.tools[toolChoice].income;
    console.log(`You earned $${player.tools[toolChoice].income}.`);
    console.log(`Total balance is ${player.bankAccount}.`);
};

const workChoice =(player, shop)=> {
    console.log(` - - - - DAY ${dayCount} - - - -`)
    let workChoice = prompt('Do you wanna work today? (yes or no) ');
    console.log('Awesome!');
    if (workChoice.toLocaleLowerCase() === 'yes') {
        enterShop(player, shop); 
        workday(player);
        // notification
        milestones(player, shop);
    }
};

const checkForTeam =(player)=>{
    for (let i =0; i<player.tools.length;i++){
        if (player.tools[i].name === 'team fo starving students') {
            return true
        }
    }
    return false
};

const startGame =()=> {
    // MAIN VARIABLEs
    const player = {
        name: username,
        bankAccount: 0,
        tools: [{        
            name: 'teeth',
            income: 1,}]
    };
    
    const shop = [{
        id: 1,
        name: 'rusty scissors',
        cost: 5,
        income: 5,
        },
        {
        id: 2,
        name: 'old-timey push lawnmower',
        cost: 25,
        income: 50,
        }, {
        id: 3,
        name:'fancy battery-powered lawnmower',
        cost: 250,
        income: 100,
        }, {
        id: 4,
        name:'team fo starving students',
        cost: 500,
        income: 250,
        }];

    while (!checkForTeam(player) && player.bankAccount <= 1000) {
        workChoice(player, shop);
        dayCount += 1
        // prompt
        restartGame = prompt('Do you want to restart the game? ')
        if (restartGame.toLocaleLowerCase() === 'yes') {
            dayCount = 0;
            break
        }
    };

    if (!checkForTeam && player.bankAccount <= 1000) {
        console.log('Congratulations! You reached your goal!');
        restartGame = prompt('Do you want to restart the game? ');  
    };
};



// - - - -  ACTUAL GAME - - - -
// instrudctions

startGame();

//For reseting the game
while (restartGame === 'yes') {
    startGame();
};
=======
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);

// Landscaper
// To get from current step to next step, we are multiplying the current step by a factor/multiple

// Process
// answer from prompt will start the business process

const equipment = [
    { type: "Teeth", 
    cost: 0, 
    earning: 1, 
    working: () => {
        while (accountBalance < 20) {
            if (accountBalance === equipment[1].cost) {
                const upgradeAnswer = prompt(`Your account balance is $${accountBalance}. Do you want to upgrade to ${equipment[1].type} which costs $${equipment[1].cost} (y/n)? `)
                if (upgradeAnswer === 'y') {
                    // upgradeTool();
                    console.log("upgrade tool yes")
                } else {
                    console.log(`You're cutting lawns with your ${equipment[0].type} which earns $${equipment[0].earning} daily`);
                    accountBalance += equipment[0].earning
                    console.log(`account balance: $${accountBalance}`);    
                }
            } 
            console.log(`You're cutting lawns with your ${equipment[0].type} which earns $${equipment[0].earning} daily`);
            accountBalance += equipment[0].earning
            console.log(`account balance: $${accountBalance}`);
            console.log("teeth still working till the end")
        }
        
    }
},
    { type: "Rusty Scissor", cost: 5, earning: 5 },
    { type: "Old lawn mower", cost: 25, earning: 50 },
    { type: "Battery power mower", cost: 250, earning: 100 },
    { type: "Hire team", cost: 500, earning: 250 }
]

// const upgradeTool = (accountBal, newToolIndex) => {
//     // account balance -= new tool index cost
// }


// we will have a variable that will show account balance - start at $0
let accountBalance = 0;

// if prompt answer is yes, then we invoke a function to starts the logic of landscaping
const businessAnswer = prompt('Welcome to landscaping business, would you like to start working (y/n)? ');


const startBusiness = (input) => {
    if (input === 'y') {
        // start the business - teeth function
        cuttingLawn()
    } else {
        console.log("You're broke! Start working!")
    }
}

// cutting lawn function that can invoke other functions like teeth, scissors, lawn mower, etc - maybe bunch of if else if
    

const cuttingLawn = () => {
    // if (accountBalance < 5) {
    //     useTool(equipment[0]);
    // } else {
    //     prompt(`Your account balance is $${accountBalance}. Do you want to upgrade to ${equipment[1].type} which costs $${equipment[1].cost} (y/n)? `)
    // }
    for (let i = 0; i < equipment.length; i++) {
        // useTool(equipment[0]) * i;
        // useTool(equipment[i])
        equipment[i].working()
        upgradeTool()

        // do {
        //     useTool(equipment[i])
        //     console.log(i);
        //     if (accountBalance === equipment[i + 1].cost) {
        //         const upgradeAnswer = prompt(`Your account balance is $${accountBalance}. Do you want to upgrade to ${equipment[i + 1].type} which costs $${equipment[i + 1].cost} (y/n)? `)
        //         // if (upgradeAnswer === 'y') {
        //         //     do {
        //         //         useTool(equipment[i + 1])
        //         //     } while (accountBalance < 40);
        //         // }
        //     }

        // } while (accountBalance < 30);
    }
    
    // if acct balance is less than 5, teeth working
            // option to spend $5 upgrades equip to scissors
    
    // while (accountBalance < 20) {
    //     /// running until we want to
    //     if (accountBalance <= 5) {
    //         if (accountBalance === equipment[1].cost) { // 5
    //             // businessPrompt("Do you want to upgrade (y/n)", equipmentUpgrade)
    //             console.log("You now have scissors - make more money");
    //             scissors()
    //         } else {
    //             console.log(accountBalance);
    //             teeth()
    //             break;
    //         }
            
    //     }
    //     // print You won and have a teaim and account balance = $1000
        
    // }

    
    // else if acct balance is greater than or equal to 5, scissors working
            // option to spend $25 upgrades equip to old lawn mower
    // else if acct balance is greater than or equal to 25, old lawn mower working
            // option to spend $250 upgrade equip to new lawn mower
    // if acct balance is greater than or equal to $500, new lawn mower working
            // option to spent $500 to hire team of starving students
    // WIN game for you have starving students and account balance $1000
} 

// for (let accountbalance = 0; accountbalance < 10; accountbalance += )

// prompt user each time if they want to upgrade if their account balance has enough $$

// You won the business when account balance reached $1000

// useTool(equipment[0]) // teeth
// useTool(equipment[1]) // scissors
// useTool(equipment[2]) // old lawn mower
const useTool = (tool) => {
    console.log(`You're cutting lawns with your ${tool.type} which earns $${tool.earning} daily`);
    accountBalance += tool.earning
    console.log(`account balance: $${accountBalance}`);
}

startBusiness(businessAnswer)




// while loop because there isn't a max # of days to work
>>>>>>> 838f10b948f633d2fd0af21408565f0a23c6d86c
