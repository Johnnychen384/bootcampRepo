const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema({
    date: {type: String},
    name: {type: String},
    from: {type: String},
    amount: {type: Number},
    tags: [String]
})

const Budget = mongoose.model('Budget', budgetSchema)

module.exports = Budget