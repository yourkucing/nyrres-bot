const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    weapon: {
        name: { type: String, default: null},
        price: { type: Number, default: 0}
    },
    mount: {
        name: { type: String, default: null},
        price: { type: Number, default: 0}
    },
    consumable: {
        name: { type: String, default: null},
        price: { type: Number, default: 0}
    },
    equipment: {
        name: { type: String, default: null},
        price: { type: Number, default: 0}
    }
})

const model = mongoose.model('storeModels', storeSchema);

module.exports = model;