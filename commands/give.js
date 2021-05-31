const inventoryModel = require('../models/inventorySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    if (!msg.mentions.users.size) {
        msg.channel.send(`Who are you giving stuffs to?`)
        return
    }
    else {
        tagged = msg.mentions.members.first()
        item = args.slice(1).join(" ")
        if (item.size == 0) {
            msg.channel.send(`What are you giving?`)
            return
        }
        else {
            itemsearch = await inventoryModel.findOneAndDelete({userID: hooman, item: item})
            if (!consumable) {
                msg.channel.send(`No such item!`)
            }
            else {
                msg.channel.send(itemsearch.category)
            }
        }
    }
}