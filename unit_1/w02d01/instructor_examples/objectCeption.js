// const adventurer = {
//     name: "Timothy",
//     hitpoints: 10,
//     belongings: ["sword", "potion", "tums"]
// }
// console.log(adventurer.belongings)
// console.log(adventurer.belongings[0])

// for (let i = 0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i])
// }


const adventurer = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite",
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"],
		}  
	}
}
// adventurer.companion.companion.belongings.push("Lantern")
// console.log(adventurer.companion.companion)

// const movies = [
//     {title: "Tokyo Story", runtime: 200},
//     {title: "Paul Blart Mall Cop", runtime: 150},
//     {title: "toy story", runtime: 100}
// ]
// console.log(movies[2].runtime)
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }



// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// console.log(foo[1][2]); //1,2



const foo = [ 1, "hi", ()=>{
    console.log('datatypes are so fun')
} ]

console.log(foo[2]())