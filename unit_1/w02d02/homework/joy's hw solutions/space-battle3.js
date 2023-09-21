// Alexis Peves

const prompt = require('prompt-sync')();

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

/*************************************** Variables ***************************************/
let roundCount = 1

const myShip = {
    name: 'USS Schwarzenegger',
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attackShip: (enemy) => {
        let hit = Math.random()
        if (hit <= myShip.accuracy) {
            enemy.hull-=myShip.firepower
            sleep(500)
            console.log(`${myShip.name} fires its lasers at the ${enemy.name.toLowerCase()}.`);
            console.log(' ');
            sleep(1000)
            console.log(`${enemy.name} takes ${myShip.firepower} damage.`);
            sleep(1000)            
        }else{
            console.log(`${myShip.name} fires and misses! `);
            console.log(' ');
        }        
        if(enemy.hull < 1){
            console.log(`You won the battle. ${enemy.name} is dead.`);
            sleep(500)
            choice()
        }else{
            sleep(1000)
            console.log(`${enemy.name} has ${enemy.hull} health left.`);
            sleep(500)
        }        
    }
}

const alienShip = {
    name: 'Alien Ship',
    hull: Math.floor(Math.random()*4)+3,
    firepower: Math.floor(Math.random()*3)+2,
    accuracy: (Math.floor(Math.random()*3) + 6)/10,
    attackShip: (enemy) => {
        let hit = Math.random()
        if(hit <= alienShip.accuracy){
            enemy.hull-=alienShip.firepower
            console.log(`${alienShip.name} returns fire at ${enemy.name}.`);
            console.log(' ');
            sleep(1000)
            console.log(`${enemy.name} takes ${alienShip.firepower} damage.`);
        }else{
            console.log(`${alienShip.name} fires and misses!`);
            console.log(' ');
            sleep(1000)
        }        
        if(enemy.hull < 1){
           console.log(`Sorry, you lose. The ${enemy.name} has exploded. Battle is over!`);
            process.exit(0)
        }else{
            sleep(500)
            console.log(`${enemy.name} has ${enemy.hull} health left.`);
        }
    }
}

/*************************************** Message Functions ***************************************/
const intro = () => {
            console.log('');console.log('');console.log('');console.log('');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*. SPACE BATTLE *.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.  A JS GAME   *.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*.*');
            console.log('');console.log('');console.log('');console.log('');
            sleep(1000)
            console.log(`Traveling throughout the galaxy under the control of the ${myShip.name},\nyou see a lone ship speed up behind you.`);
            console.log('');
            sleep(1000)
            console.log('...........THEIR WEAPON SYSTEM HAS BEEN ENGAGED');
            console.log('');
            sleep(1000)
            console.log('THEY PREPARE TO ATTACK.........................');
            console.log('');
            sleep(1000)
            console.log('YOU READY YOUR WEAPONS.......AND........FIRE!!!');
            console.log(' ');
            sleep(2000)
}

const shipsBattleWait = () => {
            sleep(500)
            console.log(' ');
            console.log('=================================================');
            console.log(`          ${7 - roundCount} enemy ships wait for battle`);
            console.log('=================================================');
            console.log(' ');
}

const continueHealth = () => {
            console.log('You chose to continue.');
            console.log(' ');
            console.log('******************************************************************');
            console.log(`** The ${myShip.name} makes repairs to it\'s hull. +5 HEALTH **`);
            console.log('******************************************************************');
            console.log(' ');
}

/*************************************** Attack Functions ***************************************/

const battle =(attacker,enemy) => {
            let turn = 1
            console.log('*********************************************************');
            console.log(`** ${myShip.name}: ${myShip.hull} Health  ${enemy.name}: ${enemy.hull} Health **`);
            console.log('*********************************************************');
            console.log(' ');
            sleep(1000)
    while(attacker.hull > 0 && enemy.hull > 0){
        if(turn % 2 === 1){
            attacker.attackShip(enemy)
        }else if(turn%2 === 0){
            enemy.attackShip(attacker)
        }
        turn+=1
    }
}

/*************************************** User Prompts ***************************************/

const choice = () => {  
            shipsBattleWait()          
    if(myShip.hull <= 5 && myShip.hull >=1){
            console.log('Your health is very LOW! Consider retreating or DIE FIGHTING!');
    }
            let playerChoice = prompt(`Would you like to (R)etreat or (C)ontinue fighting enemy ships?`)
    if(playerChoice.toLowerCase() == 'c' && roundCount == 5){  
            continueHealth()          
            alienShip.hull = Math.floor(Math.random()*4)+3
            roundCount+=1
            myShip.hull+=5
            battle(myShip,alienShip)
    }else if(playerChoice.toLowerCase() == 'c' && roundCount < 7){
            console.log('You chose to continue.');
            console.log(' ');
            alienShip.hull = Math.floor(Math.random()*4)+3
            roundCount+=1
            battle(myShip,alienShip)        
    }else if(roundCount >= 7){
            console.log(' ');
            console.log('You have killed all of the alien ships!');
            console.log('YOU WON! THANK YOU FOR PLAYING!');
            console.log(' ');
            process.exit(0)
    }else if(playerChoice.toLowerCase() == 'r'){
            console.log('You retreated. Thank you for playing.');
            process.exit(0)
    }else{
            console.log('Invalid Choice. Game Over');
    }
    
}

/*************************************** Function Statements ***************************************/
const game = () => {
            intro()
            sleep(1000)
            battle(myShip,alienShip)
}
game()