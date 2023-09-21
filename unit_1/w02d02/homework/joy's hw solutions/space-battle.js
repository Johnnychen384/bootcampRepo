// Sara Meixner, Eduardo Prado, Billy Nicudemos - W02D02 Lab
// SPACE BATTLE JS GAME


//////////////////////////////
/// * OBJECT DECLARATION * ///
//////////////////////////////


// Declare Ship Object
const spaceShip = {
    name: "USS Schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: 70
};

// Declare List of 6 Identical Alien Objects
const alienShips = [];
for (let i = 0; i < (Math.floor(Math.random() * (9 - 3 + 1)) + 3); i++) {
    const alienShip = {
        name: "Alien " + (i+1),
        hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3,
        firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2,
        accuracy: Math.floor(Math.random() * (80 - 60 + 1)) + 60
    };
    alienShips.push(alienShip);
}


////////////////////////////
/// * HELPER FUNCTIONS * ///
////////////////////////////


// Function That Handles Retreating Input
// const prompt = require('prompt-sync')();
// const isRetreating = prompt('Do you want to retreat? ');
// console.log(isRetreating);

// Two Player Battle Function with P1 and P2 Parameters
const battle = (spaceShip, alien) => {
    // While Ship and Alien Alive
    while ((spaceShip.hull > 0) && (alien.hull > 0)) {
            
        // Ship Attacks

        // Getting Random Number Between 1 and 100
        let randomHitNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

        // If Random Number Less Than Ship Accuracy, Attack Hits
        // if Random Number More Than Ship Accuracy, Attack Misses
        let shipAttackHit = false;
        if (randomHitNumber < spaceShip.accuracy) {
            shipAttackHit = true;
        }
        if (shipAttackHit === true) {
            console.log("The Space Ship's attack hit the Alien!\n");
            alien.hull -= spaceShip.firepower;
        } else {
            console.log("The Space Ship's attack missed the Alien!\n");
        }
            
        // If Alien Lives, Alien Attacks
        if (alien.hull > 0) {
            // Getting Random Number Between 1 and 100
            randomHitNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

            // If Random Number Less Than Ship Accuracy, Attack Hits
            // if Random Number More Than Ship Accuracy, Attack Misses
            let alienAttackHit = false;
            if (randomHitNumber < alien.accuracy) {
                alienAttackHit = true;
            }
            if (alienAttackHit === true) {
                console.log("The Alien's attack hit the Space Ship!\n");
                spaceShip.hull -= alien.firepower;
            } else {
                console.log("The Alien's attack missed the Space Ship!\n");
            }
        }
    }
    
    // If Ship Alive
    if (spaceShip.hull > 0) {
        console.log("You beat the Alien!");
        return spaceShip;
    } else {
        console.log("You were defeated by the Alien!");
        return alien;
    }
}


////////////////////////
/// * EXECUTE GAME * ///
////////////////////////

// Require Prompt Sync at Start
const prompt = require('prompt-sync')();

// Introduce Game with Console Logs
console.log();
console.log('///////////////////////////////////////');
console.log('///// * WELCOME TO SPACE BATTLE * /////');
console.log('///////////////////////////////////////');
console.log('\n');

// Run Game Rounds
// While Number of Aliens > 0
let currentEnemy = 0;
let winner = 0;
let roundCount = 1;
while (alienShips.length > 0) {
    // Display Round Number
    console.log('///////////////////////');
    console.log(`///// * ROUND ${roundCount} * /////`);
    console.log('///////////////////////');
    console.log();

    // Removing Last Alien Enemy from Array to Use for Battle
    currentEnemy = alienShips.pop();

    // Run Two Player Battle Function with Ship and Alien
    winner = battle(spaceShip, currentEnemy);

    // Printing Who Won
    console.log(`The winner of Round ${roundCount} is ${winner.name}!\n`);

    // If Ship Alive, Prompt User for Retreat or Continue
    if (alienShips.length > 0) {
        if (winner === spaceShip) {
            // Announce Arrival of New Alien Ship
            console.log(`Another ship has entered the area!`);

            // Prompt User for Retreat or Continue Input
            console.log(`There are ${alienShips.length} Alien Ships left.`);
            console.log(`You have ${spaceShip.hull} HP remaining.`);
            console.log(`Would you like to keep fighting or retreat?`);
            let keepGoing = prompt("Write fight or retreat: ");
            
            // Decide What to Do Based on Input
            if (keepGoing.toUpperCase() === "FIGHT") {
                console.log(`You decide to fight another enemy alien!\n`);
            } else if (keepGoing.toUpperCase() === "RETREAT") {
                console.log(`You decide to retreat from battle!`);
                console.log(`Your break from battle restores your HP back to 20!\n`);
                spaceShip.hull = 20;
            }
        } else {
            console.log(`You lost! Better luck next time!`);
            break;
        }
    }

    // Increment Round Count
    roundCount++;
}

// Final Results Banner
console.log('/////////////////////////////');
console.log('///// * FINAL RESULTS * /////');
console.log('/////////////////////////////');
console.log('');

// Print HP and Aliens Remaining
if (spaceShip.hull < 0) {
    console.log(`You have 0 HP remaining.`);
} else {
    console.log(`You have ${spaceShip.hull} HP remaining.`);
}
console.log(`There are ${alienShips.length} Alien Ships remaining.`);
console.log();

// Announce Winner
if (spaceShip.hull > 0) {
    console.log(`${spaceShip.name} wins!!!`);
} else {
    console.log(`${spaceShip.name} loses!!!`);
}

// Print Game Over Statement
console.log(`GAME OVER!!!\n`);