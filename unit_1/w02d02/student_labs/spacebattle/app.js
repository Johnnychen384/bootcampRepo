// JohnnyChen && Christian Leftridge

const prompt = require('prompt-sync')();

// Generate number of aliens to fight
let numberOfAliens = Math.floor(Math.random() * 10) + 1



// Create an object that represents our spaceship
const userSpaceShip = {
    name: "USS Schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: 0.7,

    // method to lower alien ships hull
    attack: (enemy) => {

        // condition to determine if user ship has enough accuracy to successfully hit the alien ship
        if(userSpaceShip.accuracy >= enemy.accuracy){
            console.log('User is attacking')
            enemy.hull -= userSpaceShip.firepower
            console.log(`Enemy ship has been hit. The Aliens hull is now ${enemy.hull}`)

        } else {
            // if user misses attack
            console.log('User is attacking')
            console.log('OOPS we missed!')
        }
    }
}


// create random number generator for whole number
// User plugs in a range of numbers.
const randomWholeNumber = (low, high) => {
   const number = Math.floor(Math.random() * high) + low
   return number > high ? number - 2 : number
}


// create random acc generator
const randomAccuracy = () => {

    // generates a random number between .6 to .8
    const acc = Math.floor(Math.random() * 3 + 6) / 10
    return acc
}



// alien class that randomly gives us new stats per instance
class AlienShip {
    constructor(name){
        this.name = `Alien ship ${name}`;
        this.hull = randomWholeNumber(3, 6)
        this.firepower = randomWholeNumber(2, 4)
        this.accuracy = null
    }

    // method to lower user's hull
    attack (enemy) {

        // checks if alienship accuracy is greater or equal to user's accuracy to determine if attack is successful
        if(this.accuracy >= enemy.accuracy){

            // if attack is successful
            console.log('Alien is attacking')
            enemy.hull -= this.firepower
            console.log(`Alien has hit our ship. Our ship hull is now at ${enemy.hull}`)

        } else {
            // if attack misses
            console.log('Alien is attacking')
            console.log('OOPS the aliens missed!')
        }
    } 

}


// create prompt that tells story then gives options Attack/Retreat
// Uses this function for the first ever prompt
const questionFirstRound = () => {
    const answer = prompt('Oh no! Aliens have invaded our galaxy. What would you like to do? [Attack/Retreat]')
    
    // if the answer to the prompt is attack, call battle function passing in true.
    if(answer.toLowerCase() === 'attack') battle(true)
    else battle(false)
}


// prompt that does the same as above but just different scripts.
// Uses this prompt when there are multiple battles.
const questionAfterFirst = () => {
    const answer = prompt(`You see alien ships! Would you like to continue to battle? [Attack/Retreat]`)

    if(answer.toLowerCase() === 'attack') battle(true)
    else battle(false)
}


// create function called battle that simulates battle
const battle = (question) => {
    
    if(question){
        // creates new instance of alien ships
        const alienShip = new AlienShip(numberOfAliens)

        // variable to decide whos turn it is
        let whosTurn = 0
        
        while(alienShip.hull > 0 && userSpaceShip.hull > 0){
            
            // assign a random accuracy to alien ship every loop
            alienShip.accuracy = randomAccuracy()

            // checks who turn it is
            if(whosTurn % 2 === 0) userSpaceShip.attack(alienShip)
            else alienShip.attack(userSpaceShip)
            
            // increments whosTurn
            whosTurn++
        }

        // if our ship wins
        if(userSpaceShip.hull > 0){

            // decreases number of aliens we battled
            numberOfAliens -= 1

            // checks if number of aliens is 0, if keep battling
            if(numberOfAliens > 0){

                // checks our ships hull, if it is low give our firepower a power boost!
                if(userSpaceShip.hull <= 5){
                    console.log("we won this battle, but oh no! our ship is heavily damaged.")

                    // powerboost
                    userSpaceShip.firepower += randomWholeNumber(1, 5)

                    console.log("Powering up user space ships firepower!")
                    console.log(`Number of aliens left ${numberOfAliens}`)

                    // calls function to continue allowing us to fight
                    questionAfterFirst()

                } else {

                    // if our ships hull is not low run this
                    console.log("We won this battle!")
                    console.log(`Number of aliens left ${numberOfAliens}`)

                    questionAfterFirst()
                }

            } else {

                // run this "else" when all alien ships have been destroyed.
                console.log("We stopped the invasion! We Won!")
                console.log("GG!")
                
            }
            

        } else {

            // if alien ship wins
            console.log("Oh no our ship has been destroyed!")
            console.log("GAMEOVER, get better!")
        }

    } else {

        // if you choice to retreat at prompt
        console.log("You saw those alien ships and ran away.")
        console.log("GAMEOVER you coward!!")
    }
}


questionFirstRound()
