const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    characterName: { type: String, default: null},
    className: { type: String, default: null},
    race: { type: String, default: null},
    level: { type: Number, default: 1},
    alignment: { type: String, default: null},
    ability: {
        strength: { type: Number, default: 0},
        dexterity: { type: Number, default: 0},
        constitution: {type: Number, default: 0},
        intellect: { type: Number, default: 0},
        wisdom: {type: Number, default: 0},
        charisma: {type: Number, default: 0}
    },
    conditions: {
        blinded: { type: String, default: 'no'},
        charmed: { type: String, default: 'no'},
        deafened: { type: String, default: 'no'},
        frightened: { type: String, default: 'no'},
        grappled: { type: String, default: 'no'},
        incapacitated: { type: String, default: 'no'},
        invisible: { type: String, default: 'no'},
        paralyzed: { type: String, default: 'no'},
        petrified: { type: String, default: 'no'},
        poisoned: { type: String, default: 'no'},
        prone: { type: String, default: 'no'},
        restrained: { type: String, default: 'no'},
        stunned: { type: String, default: 'no'},
        unconscious: { type: String, default: 'no'},
        exhaustion: { type: String, default: 'no'},
    }
})

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;