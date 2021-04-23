const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    characterName: { type: String, default: null},
    gender: { type: String, default: 'Nonbinary'},
    class: { type: String, default: null},
    race: { type: String, default: null},
    subrace: { type: String, default: null},
    level: { type: Number, default: 1},
    alignment: { type: String, default: null},
    savingthrows: { type: String, default: null},
    hitdie: { type: String, default: null},
    proficiency: { type: Number, default: 2},
    ability: {
        strength: { type: Number, default: 0},
        dexterity: { type: Number, default: 0},
        constitution: {type: Number, default: 0},
        intellect: { type: Number, default: 0},
        wisdom: {type: Number, default: 0},
        charisma: {type: Number, default: 0}
    },
    notes: { type: String, default: null }
})

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;