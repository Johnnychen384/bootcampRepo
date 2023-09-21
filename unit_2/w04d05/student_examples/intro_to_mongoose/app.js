const mongoose = require('mongoose')
const Tweet = require('./tweet.js')


const mongoURI = 'mongodb://localhost:27017/' + 'tweets'
const db = mongoose.connection;

mongoose.connect(mongoURI, () => {
    console.log('The connection is established!')
})

db.on('error', (err) => {
    console.log(err.message + ' is mongod not running?')
})

db.on('connected', () => {
    console.log('mongo connected: ', mongoURI)
})

db.on('disconnected', () => {
    console.log('mongo disconnected')
})


setTimeout(() => {
    db.close()
}, 1000)