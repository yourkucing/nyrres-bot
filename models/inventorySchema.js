const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    userID: { type: String, require: true},
    serverID: { type: String, require: true},
    characterName: { type: String, default: null},
    item: { type: String, default: null},
    category: { type: String, default: null}
})

const model = mongoose.model('InventoryModels', inventorySchema);

module.exports = model;