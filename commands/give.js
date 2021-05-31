const inventoryModel = require('../models/inventorySchema');
const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');
const { findOne } = require('../models/profileSchema');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    if (!msg.mentions.users.size) {
        msg.channel.send(`Who are you giving stuffs to?`)
        return
    }
    else {
        tagged = msg.mentions.members.first()
        taggedUser = await profileModel.findOne({userID: tagged.id})
        item = args.slice(1).join(" ")
        if (item.size == 0) {
            msg.channel.send(`What are you giving?`)
            return
        }
        else {
            itemsearch = await inventoryModel.findOne({userID: hooman, item: item})
            if (!itemsearch) {
                msg.channel.send(`No such item!`)
            }
            else {
                category = itemsearch.category
                inventoryModel.findOneAndDelete({userID: hooman, item: item}).then(give => {
                    inventoryModel.create({
                        userID: tagged.id,
                        serverID: msg.guild.id,
                        characterName: taggedUser.characterName,
                        item: item,
                        category: category
                    });
                })
            }
        }
    }
}