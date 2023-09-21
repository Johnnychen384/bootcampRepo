// ////////////////////////////////////////////////////////////
// Syntax////////////////
///////////////////////////////////////////////////////////////

// 1. List and describe each individual piece of syntax that we use to construct an object. Don't leave anything out! The list is finite.

// declaration keyword like const/let/var -> const
// variable name to allow us to refer to object -> obj1
// the assignment operator -> =
// curly braces that holds all the properties of the object -> {}
// properties that are made up of key and value pairs -> color : red


///////////////////////////////////////////////////////////////
/////Me, Me, Me//////////////
///////////////////////////////////////////////////////////////

const me = {}
me.firstName = "Nani"
me.lastName = "Pelekai"
me.age = 21
me.email = "nani@foo.bar"

// console.log(me)
// console.log(me.firstName)
me.age = 1000
// console.log(me.age)
me["place of residence"] = "somewhere"
// console.log(me['place of residence'])


///////////////////////////////////////////////////////////////
// ///Fancy Greeting
///////////////////////////////////////////////////////////////

const fancyGreeting = me => {
    return `Greetings, ${me.firstName} ${me.lastName}`
}

// console.log(fancyGreeting(me))

///////////////////////////////////////////////////////////////
//////Slimer////////
///////////////////////////////////////////////////////////////
const monster = {
    name: "Slimer",
    color: "greenish",
    type: "plasm or ghost or something"
}

// console.log(monster.name)
// monster.type = 'creature'
// monster.age = 6
// console.log(monster.type, monster.age)
 

///////////////////////////////////////////////////////////////
// Ogres/////
///////////////////////////////////////////////////////////////

const adventurer = {
    name: "jj",
    hitpoints: 100,
    att: ""
}

const ogre = {
    hitpoints: 100,
    att: 22
}


const startBattle = (str, object1 = adventurer, object2 = ogre) => {
    let player = object1
    let npc = object2

    while(npc.hitpoints !== 0 && player.hitpoints !== 0){
        console.log(`The adventurer attacks the ogre for ${str}`)
        npc.hitpoints = npc.hitpoints - str
        console.log(`The ogre has ${npc.hitpoints} hitpoints left.`)

        console.log(`The ogre hits the adventurer for ${npc.att}`)
        player.hitpoints = player.hitpoints - npc.att
        console.log(`The adventurer has ${player.hitpoints} hitpoints left.`)
    }
}

// startBattle(25)

////////////////////////////////////////////////////////////////////
/////Cat Combinator////////
///////////////////////////////////////////////////////////////////

const mamaCat = {
    name: 'sally',
    breed: 'peri',
    age: 1
}

// console.log(mamaCat.age)
// console.log(mamaCat.breed)

const papaCat = {
    name: 'Tom',
    breed: 'pre',
    age: 2
}

const combineCats = (mama, papa) => {
    return {name: `${mama.name}${papa.name}`, age: 1, breed: `${mama.breed}-${papa.breed}`}
}

// combineCats(mamaCat, papaCat);

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

// console.log(combineCats(mamaCat, papaCat))



////////////////////////////////////////////////////////////////////
// Cat Brain Bender///////
////////////////////////////////////////////////////////////////////

// console.log(combineCats(combineCats(combineCats(mamaCat, papaCat), combineCats(mamaCat, papaCat)), combineCats(combineCats(mamaCat, papaCat), combineCats(mamaCat, papaCat))));



////////////////////////////////////////////////////////////////////
/////Profiler
////////////////////////////////////////////////////////////////////

const profiler = (username, hometown, favoriteColor) => {
    return {username: `${username}`, 'hometown': `${hometown}`, 'favoriteColor': `${favoriteColor}`}
}

// console.log(profiler("stitches13", "new leaf", "orange"))


////////////////////////////////////////////////////////////////////
////ProfilerPLus
////////////////////////////////////////////////////////////////////

const profilerPlus = (key, age) => {
    const newProfile = profiler("stitches13", "new leaf", "orange")
    newProfile[`${key}`] = age
    console.log(newProfile)
}

// profilerPlus("age", 100)


////////////////////////////////////////////////////////////////////
/////// User Object Data Structure
////////////////////////////////////////////////////////////////////

const user = {
    name: "Johnny",
    email: "asdnuqwnf@gmail.com",
    age: 20,
    purchased: []

}

user.email = '123123123@gmail.com'
user.age++
user.location = "BehideYou"

user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("Merino jodhpurs")
// console.log(user.purchased[2])

user.friend = {
	name: "Grace Hopper",
	age: 85,
    location: "asdasdad",
    purchased: []
}

// console.log(user.friend.name)
// console.log(user.friend.location)
user.friend.age = 55
// console.log(user)


// for(let item of user.purchased){
//     console.log(item)
// }

const updateUser = () => {
    user.age++
    user.name = user.name.toUpperCase()
}
updateUser()
// console.log(user)