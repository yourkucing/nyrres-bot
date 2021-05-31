const mongoose = require('mongoose');

const spellSchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    characterName: { type: String, default: null},
    spell: { type: String, default: null},
    type: { type: String, default: null}
})

const model = mongoose.model('SpellModels', spellSchema);

module.exports = model;