const mongoose = require('mongoose');

const moneySchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    characterName: { type: String, default: null},
    money: { type: Number, default: 0}
})

const model = mongoose.model('MoneyModels', moneySchema);

module.exports = model;