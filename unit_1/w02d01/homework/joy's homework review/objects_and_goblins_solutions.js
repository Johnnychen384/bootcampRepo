
////////////////////////////////////
///// PART 1: OBJECT PRACTICE  /////
////////////////////////////////////


// 1. Create an object based on your desk setup.  You can call this "setup".  Be as descriptive as possible.  Include how many screens you have, if you have a mouse, type of chair, laptop size, etc.

const setup = {
    screens: 2,
    mouse: false,
    trackpad: true,
    keyboard: "magic, ten keypad",
    chairType: "dining",
    externalMonitor: true,
    desk: {
        length: 47.5,
        standing: false,
        color: 'brown and black',
    }
}

// 2. Let's say you have upgraded your setup and have added another screen.  Let's update that screen property on the object ot have one more than before.

setup.screens = 3

// console.log(setup)

// 3. Let's create an array of random items on your desk you don't consider part of your setup now!  WIthout hard coding it into the original object, add said array to the objecty as a new property.  Let's call this array "clutter" (if you don't have any random things or clutter, make some stuff up!).

setup.desk.clutter = ['black tourmaline crystal', 'tarot deck', 'journal', 'rubber duck', 'post-its', 'phone charger', 'rubiks cube', 'mug full of pens and pencils', 'checkbook']

// console.log(setup)

// 4. Now let's say we want to list all fo the things in that array out in a list so we can see just how messy/cluttered it is at the moment.  Iterate over the array we added in the previous step and list out all the items!

// setup.desk.clutter.forEach((item, i) => {
//     console.log(item)
// })

// 5. Now that we have an array in the object, let's also add an object into our object called "computer" (remember do not touch the original object directly).  Give it keys of "screenSie" and "oS"

setup.computer = {
    brand: 'apple',
    type: 'iMac',
    screenSize: 24,
    memory: '8 GB',
    iOS: 'Monterey 12.6'
}

// console.log(setup)

// 6. Let's now use dot notation to pull out both of those keys in the "computer" object and print them to the console.

// console.log(`Computer screen size: ${setup.computer.screenSize}, OS: ${setup.computer.iOS}`)

// 7. Again without touching the original object in yoru code, let's add an array to that "computer" object we added in the previous step.  Let's call this "files" and have it be a list of random file names.

setup.computer.files = ['budget.docx', 'resume.pdf', 'catmeme.jpeg']

// console.log(setup.computer)

// 8. Now let's do a little repeat of step 4, but now we have to dive a little deeper into the original object and loop over the array we added in the last step that is nested in the object "computer" that is nested inside of the original object.

// setup.computer.files.forEach((item, i) => {
//     console.log(item)
// })

// 9. Given teh array of objects below, loop through the array and print out both the title and author for each book.

const books = [
    {
        title: 'Pragmatic Programmer', 
        author: 'David Thomas + Andrew Hunt'
    }, 
    {
        title: 'Clean Code', 
        author: 'Robert Martin'
    }, 
    {
        title: 'You Don\'t Know JS', 
        author: 'Kyle Simpson'
    }
]

// for (let i = 0; i < books.length; i++) {
//     console.log(`${books[i].title} by ${books[i].author}`)
// }

// books.forEach((item, i) => {
//     console.log(`${books[i].title} by ${books[i].author}`)
// })

////////////////////////////////////
/////  PART 2: HERO VS GOBLIN  /////
////////////////////////////////////

// 1. Create an object for your hero and call this "hero".  The hero object should have a name, hitPoints (set this to 50), and attack points (set this to 10).

const hero = {
    name: "Eevee",
    hitPoints: 50,
    attack: 10,
}

// 2. Create an object for an enemy goblin and call this "Goblin".  The goblin object should hav ea name, hitPoints (set this to 20) and attack (set this to 5).

const goblin = {
    name: "Bad Goblin Villan",
    hitPoints: 20,
    attack: 5,
}

// 3. Let's have the goblin get a sneak attack in and hit the hero first.  Subtrack the goblin's attack from the hero's hitPoinst and console.log the hero's hit points after.

const goblinAttack = () => {
    hero.hitPoints -= goblin.attack // hero.hitPoints = hero.hitPoints - goblin.attack
    console.log(`${goblin.name} has attacked ${hero.name}! ${hero.name} now has ${hero.hitPoints} health left.`)
}

// goblinAttack()

// 4. Now it's the hero's turn!  Have the hero attack the goblin in the same way the goblin attacked the hero and log the goblin's hp after!

const heroAttack = () => {
    goblin.hitPoints -= hero.attack
    console.log(`${hero.name} has attacked ${goblin.name}! ${goblin.name} now has ${goblin.hitPoints} health left.`)
}

// heroAttack()


// 5.  Now both are locked into a battle!  Let's write some logic here that will allow the goblin and hero to fight until one of their hitPoints values reaches 0 or below.

// while (hero.hitPoints > 0 && goblin.hitPoints > 0) {
//     goblinAttack();
//     heroAttack()
// }

// 6. Let's do some refactoring! Let's have these two objects interact with each other using methods.  Give both the hero and goblin a method called attackEnemy which will accept a parameter called "enemy" (this will be the other object you pass an argument to it).  THe method should subtract the attack of the attacker from the hitPoints of the enemy.


// const hero = {
//     name: "Eevee",
//     hitPoints: 50,
//     attack: 10,
//     attackEnemy: (enemy) => {
//         enemy.hitPoints -= hero.attack
//         console.log(`${enemy.name} was attacked by ${hero.name}, they now have ${enemy.hitPoints} health left`)
//     }
// }

// const goblin = {
//     name: "Bad Goblin Villan",
//     hitPoints: 20,
//     attack: 5,
//     attackEnemy: (enemy) => {
//         enemy.hitPoints -= goblin.attack
//         console.log(`${enemy.name} was attacked by ${goblin.name}, they now have ${enemy.hitPoints} health left`)
//     }
// }

// 7. Now instead of having the two attack each other with just property values, let's have them fight using the methods we just made!

// const battle = (color, p2) => {
//     let turn = 1
//     while (color.hitPoints > 0 && p2.hitPoints > 0) {
//         if (turn % 2 === 1) {
//             color.attackEnemy(p2)
//         } else if (turn % 2 === 0) {
//             p2.attackEnemy(color)
//         }
//         turn += 1
//     }
// }

// battle(hero, goblin)