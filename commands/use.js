const inventoryModel = require('../models/inventorySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    item = args.join(" ")
    consumable = await inventoryModel.findOneAndDelete({userID: hooman, item: item})
    if (!consumable) {
        msg.channel.send(`No such item!`)
    }
    else {
        msg.channel.send(`You have used **${item}**`)
    }
}