const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    characterName: { type: String, default: None},
    className: { type: String, default: None},
    race: { type: String, default: None}
})

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;