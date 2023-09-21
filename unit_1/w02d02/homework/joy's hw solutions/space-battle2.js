// Derrick Dahlitz

const prompt = require('prompt-sync')();

/*=================================== Variables ======================================*/
    //all global variables 
    //all object variables

let round = 1
const regenerativeShields = 2

const myShip = {
    name: "USS Schwarzenegger", 
    hull: 20,
    damage: 5,
    accuracy: 0.7,
    attackEnemy: () => {
        //function to hit enemy
        //alien damage counter
        //moves to alienLivesCheck
        let onHit = Math.random()
        if( onHit <= myShip.accuracy){
            alienShip.hull -= myShip.damage
            sleep(1000)
            console.log(` The ${myShip.name} lazer has hit the ${alienShip.name} for ${myShip.damage}`)
            if(alienShip.hull<=0){
                alienLivesCheck()
            }
        }else{
            sleep(1000)
            console.log(`Your lazer missed and shot into space`)
        }
    }
} 

const alienShip = {
    name: "Alien Ship",
    hull: Math.floor(Math.random()*4)+3,
    damage:  Math.floor(Math.random()*3)+2,
    accuracy: (Math.floor(Math.random()*3)+6)/10,

    enemyCount: Math.ceil(Math.random()*3)+3,
    attackEnemy: () => {
        let onHit = Math.random()
        if(onHit <= alienShip.accuracy){
        //function for alien to hit player
        //player damage counter
        //missed shot or game over
            myShip.hull -= alienShip.damage
            sleep(1000)
            console.log(` The ${alienShip.name} lazer has hit the ${myShip.name} for ${alienShip.damage}`)
            sleep(1000)
            if ( myShip.hull < 18 && onHit <= 0.3 ){
                myShip.hull += regenerativeShields
                console.log(`Due to regenerative shields our hull has repared itself back to ${myShip.hull} points`)
            }
            //regenerative shields
            sleep(1000)
            console.log(`The ${myShip.name} hull has ${myShip.hull} points remaining`)
            if(myShip.hull <= 0 ){
                youLose()
            }else{
                roundCounter()
            }
        }else if(onHit > alienShip.accuracy){
            sleep(1000)
            console.log(`The alien lazer missed and shot into space`)
            roundCounter()
        }
    }
}

/*===================================== Functions =======================================*/
/*======================================= Pause =========================================*/

//sets a pause between text lines to make user reading simpler
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/*=================================== Game Endings ======================================*/

const youWon = () => {
    console.log ('======================================================================================')
    console.log (`CONGRATULATIONS!You and the ${myShip.name} has victoriously held back the alien fleet`)
    console.log ('======================================================================================')
    sleep(1000)
    process.exit()
}

const youLose = () => {
    console.log ('==========================================================================================')
    console.log (`During battle the ${myShip.name} has fallen and so have all of humanity's hopes of victory`)
    console.log ('==========================================================================================')
    sleep(1000)
    process.exit()
}

const retreat = () => {
    console.log ('=================================================================================')
    console.log (`During battle the ${myShip.name} decided to retreat and live to fight another day`)
    console.log ('=================================================================================')
    sleep(1000)
    process.exit()
}

/*=================================== Alien Health/Lives Check ======================================*/

//checks alien ship count
//decrements ship count
//resets certain enemy ships values
const alienLivesCheck = () => {
    if( alienShip.enemyCount === 0){
        youWon()
    } else {
        alienShip.enemyCount--
        alienShip.hull = Math.floor(Math.random()*4)+3
        alienShip.damage =  Math.floor(Math.random()*3)+2
        alienShip.accuracy = (Math.floor(Math.random()*3)+6)/10
        sleep(1000)
        console.log(`The ${alienShip.name} has exploded and fleet contains ${alienShip.enemyCount} more ships`)
        sleep(1000)
        roundCounter()
    }
}

/*=================================== Battle Turns ======================================*/

//alternates turn between human and alien ship
const battle = ( human, alien ) => {
    let turn = 1
    while( human.hull > 0 && alien.hull > 0 ){
        if( turn % 2 === 1 ){
            turn++
            human.attackEnemy(alien)
        } else if ( turn % 2 === 0) {
            turn++
            alien.attackEnemy(human)
        }
    }
}

/*=================================== Round Counter ======================================*/

//increases the round
//allows a player to continue or retreat
const roundCounter = () => {
    let choice = prompt(`Do you want to continue fighting or retreat? [CONTINUE / RETREAT]`)
        if(choice.toLowerCase() === "continue"){
            round++
            sleep(1000)
            console.log(`You have chosen to continue fighting begin round ${round}`)
            sleep(1000)
            battle(myShip, alienShip)
        } else if (choice.toLowerCase() === "retreat"){
            sleep(1000)
            console.log("You have decided to give up the fight and let someone else take the mantle")
            sleep(1000)
            console.log("It will never be known if your decision led to the fall of Earth")
            return retreat()
        } else {
            roundCounter()
        }
    }

/*=================================== Function Calls ======================================*/

battle(myShip, alienShip)