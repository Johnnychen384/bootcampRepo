const milkyWay = {}
milkyWay.type = 'barred spiral'
milkyWay.age = 13,600,000,000
milkyWay.containsEarth = false
// console.log(milkyWay.containsEarth)
milkyWay.containsEarth = true
// console.log(milkyWay.containsEarth)
milkyWay['number of starts'] = 100_000_000_000
// console.log(milkyWay)



const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// console.log(solarSystem[0].ringSystem)
// console.log(solarSystem[4].moons)
solarSystem[1].moons.push("Endor")
console.log(solarSystem[1].moons)
solarSystem.push({name: 'Pluto', ringSystem: false, moons: ["Charon"]})
solarSystem[2].diameter = '7917.5mi'
solarSystem[0].ringSystem = true
solarSystem[6].moons[3] = "Oberon"

for(let obj of solarSystem){
    if(obj.ringSystem) console.log(obj)
}