const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    userID: { type: String, require: true, unique: true},
    serverID: { type: String, require: true},
    characterName: { type: String, default: null},
    weapon: {
        name: { type: String, default: null}
    },
    mount: {
        name: { type: String, default: null}
    },
    consumable: {
        name: { type: String, default: null}
    },
    equipment: {
        name: { type: String, default: null}
    },
    pet: {
        name: { type: String, default: null}
    }
})

const model = mongoose.model('InventoryModels', inventorySchema);

module.exports = model;