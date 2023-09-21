// *******************************************//
// Everything provided to students in markdown start
// *******************************************//

// Dependencies
const mongoose = require('mongoose')
const db = mongoose.connection


// Config
const mongoURI = 'mongodb://localhost:27017/hotel'

// Models
const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Connect to Mongo
mongoose.connect(mongoURI, () => {
  console.log('The connection with mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//

// Hotel.create({ "name": "Hotel Johnny",
// "location": "California",
// "rating": 3,
// "vacancies": false,
// "rooms": [{
//     "roomNumber": 12,
//     "size": "Queen Double",
//     "price": 10,
//     "booked": true
//     }],
//     "tags": [
//         "pink champagne",
//         "wine",
//         "lovely",
//         "can't leave"
//       ]
// }, (error, hotel) => {
//  if(error) console.log(error)
//  else console.log(hotel)
// })


Hotel.countDocuments({}, (err, data) => {
    if (err) console.log(err.message)
    console.log(`There are ${data} hotels in this database`)
})


// Hotel.find((err, hotels) => {
//   if(err) console.log(err)
//   else {
//     // console.log(hotels)

//     for(let hotel of hotels){
//         console.log(hotel.name)
//     }
//   }
// })

Hotel.find({name: "Hotel Johnny"})