const mongoose = require('mongoose');

const hitpointSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    characterName: { type: String, default: null},
    class: { type: String, default: null},
    armorclass: {type: Number, default: 0},
    maxHP: { type: Number, default: 0},
    HP: { type: Number, default: 0}, 
    level: { type: Number, default: 1},
    experience: { type: Number, default: 0},
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

const model = mongoose.model('HitpointModel', hitpointSchema);

module.exports = model;