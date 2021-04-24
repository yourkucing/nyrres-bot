const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: { type: String, default: null},
    rarity: { type: Number, default: 1}
})

const model = mongoose.model('PetModels', petSchema);

module.exports = model;