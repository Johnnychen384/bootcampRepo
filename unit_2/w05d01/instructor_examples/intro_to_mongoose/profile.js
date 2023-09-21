const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new Schema({
    username: String,
    followerCount: Number,
    profilePicture: String,
})

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile