// console.log("Hi")


//////////////////////////////////////////////////////////////////////////
// Part 1: Object Practice
//////////////////////////////////////////////////////////////////////////

// 1. Create an object based on your desk setup. You can call this "setup". Be as discriptive as possible. Include how many screens you have, if you have a mouse, type of chair, laptop size.

const setup = {
    screens: 3,
    mouse: 2,
    chair: "office chair",
    headset: 1,
    phone: 1,
    speaker: 2
}


// 2. Let's say you have upgraded your setup and have added another screen. Let's update that screen property on the object to have one more than before.​

setup.screens = 4

// 3. Let's create an array of any random items on your desk you don't consider part of your setup now! Without hard coding it into the original object, add said array to the object as a new property. Let's call this array "clutter" (If you don't have any random things or clutter, make some stuff up!).​

setup.clutter = ["mask", "medicines", "water bottle", "nail clipper"]

// 4. Now let's say we want to list all of the things in that array out in a list so we can see just how messy/cluttered it is at the moment. Iterate over the array we added in the previous step and list out all items!​

// for(let items of setup.clutter){
//     console.log(items)
// }

// 5. Now that we have an array in the object, let's also add an object into our object called "computer" (remember do not touch the original object directly). Give it keys of "screenSize" and "OS" (operating system).

setup.computer = {screenSize: '19inch', OS: "Mac"}

// 6. Let's now use dot notation to pull out both of those keys in the "computer" object and print them to the console.​

// console.log(setup.computer.screenSize, setup.computer.OS)

// 7. Again without touching the original object in your code, let's add an array to that "coomputer" object we added in the previous step. Let's call this "files" and have it be a list of random file names. (These don't have to be real. Make up some file names to put in this array as strings.)​

setup.computer.files = ["1", 2, 3]

// 8. Now let's do a little repeat of step 4, but now we have to dive a little deeper into the original object and loop over the array we added in the last step that is nested in the object "computer" that is nested inside of the original object.​

// for(let items of setup.computer.files){
//     console.log(items)
// }

// 9. Given the array of objects below, loop through the array and print out both the title and author for each book.

const books = [{title: 'Pragmatic Programmer', author: 'David Thomas + Andrew Hunt'}, {title: 'Clean Code', author: 'Robert Martin'}, {title: 'You Don\'t Know JS', author: 'Kyle Simpson'}]

// for(let obj of books){
//     console.log(obj.title, obj.author)
// }



//////////////////////////////////////////////////////////////////////////
///// Part 2: Hero vs Goblin //////////
//////////////////////////////////////////////////////////////////////////

// 1. Create an object for your hero and call this "hero". The hero object should have a name, hitPoints (set this to 50), attack (set this to 10).​

const hero = {
    name: 'Jj',
    hitPoints: 50,
    attack: 10
}


// 2. Create an object for an enemy goblin and call this "goblin". The goblin object should have a name, hitPoints(set this to 20), and attack (set this to 5).​

const goblin = {
    name: "chief",
    hitPoints: 20,
    attack: 5
}

// 3. Let's have the goblin get a sneak attack in and hit the hero first. Subtract the goblin's attack from the hero's hitPoints and console log the hero's hit points after.​

// console.log('Oh no! The goblin has attacked the hero!')
// hero.hitPoints = hero.hitPoints - goblin.attack
// console.log(`${hero.name}'s HP has gone down to ${hero.hitPoints}. `)


// 4. Now it's the hero's turn! Have the hero attack the goblin in the same way the goblin attacked the hero and log the goblin's hp after.​

// console.log(`${hero.name} returns an attack to the goblin named ${goblin.name}.`)
// goblin.hitPoints = goblin.hitPoints - hero.attack
// console.log(`${goblin.name}'s HP has gone down to ${goblin.hitPoints}. `)


// 5. Now both are locked into a battle! Let's write some logic here that will allow the goblin and hero to fight until one of their hitPoints values reaches 0 or below.​

// while(goblin.hitPoints !== 0 && hero.hitPoints !== 0){
//     console.log('Oh no! The goblin has attacked the hero!')
//     hero.hitPoints = hero.hitPoints - goblin.attack
//     console.log(`${hero.name}'s HP has gone down to ${hero.hitPoints}. `)

//     console.log(`${hero.name} returns an attack to the goblin named ${goblin.name}.`)
//     goblin.hitPoints = goblin.hitPoints - hero.attack
//     console.log(`${goblin.name}'s HP has gone down to ${goblin.hitPoints}. `)

// }


// 6. Let's do some refactoring! Let's have these two objects interact with each other using methods. Give both the hero and goblin a method called attackEnemy which will accept a parameter called "enemy" (this will be the other object when you pass an argument to it). The method should subtract the attack of the attacker from the hitPoints of the enemy.​

hero.attackEnemy = goblin => {
    goblin.hitPoints = goblin.hitPoints - hero.attack
}

goblin.attackEnemy = hero => {
    hero.hitPoints = hero.hitPoints - goblin.attack
}

// while(goblin.hitPoints !== 0 && hero.hitPoints !== 0){
//     console.log(`Oh no! The goblin has attacked the hero ${hero.name}!`)
//     goblin.attackEnemy(hero)
//     console.log(`${hero.name}'s HP has gone down to ${hero.hitPoints}. `)

//     console.log(`${hero.name} returns an attack to the goblin named ${goblin.name}.`)
//     hero.attackEnemy(goblin)
//     console.log(`${goblin.name}'s HP has gone down to ${goblin.hitPoints}. `)

// }



//////////////////////////////////////////////////////////////////////////
///////////// Hungry For More! //////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


const startBattle = () => {
  for(let i = 1; i <= 10; i++){

    while(goblin.hitPoints !== 0 && hero.hitPoints !== 0){
        console.log(`Oh no! The goblin ${i} has attacked the hero ${hero.name}!`)
        goblin.attackEnemy(hero)
        console.log(`${hero.name}'s HP has gone down to ${hero.hitPoints}. `)
    
        console.log(`${hero.name} returns an attack to the goblin ${i}.`)
        hero.attackEnemy(goblin)
        console.log(`Goblin ${i}'s HP has gone down to ${goblin.hitPoints}. `)
    
    }

    if(!goblin.hitPoints){
        console.log(`Goblin ${i} has been defeated!`)
        goblin.hitPoints = 20
    }
    
    if(!hero.hitPoints) {
        console.log("Oh no! The heros health is 0")
        hero.hitPoints = 50
        console.log(`The hero drinks a magic healh poition to restore healh to ${hero.hitPoints}`)
    }

    
  }
}

startBattle()