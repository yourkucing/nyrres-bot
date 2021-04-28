const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    item: { type: String, default: null},
    price: 
        { 
            copper: { type: Number, default: 0},
            silver: { type: Number, default: 0},
            electrum: { type: Number, default: 0},
            gold: { type: Number, default: 0},
            platinum: { type: Number, default: 0}
        },
    category: { type: String, default: null}
})

const model = mongoose.model('storeModels', storeSchema);

module.exports = model;