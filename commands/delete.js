const profileModel = require('../models/profileSchema');
const moneyModel = require('../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    u = "no"
    msg.channel.send(`Are you sure you want to delete? (Answer yes or no.)`)
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
        if (collected.first().content.toLowerCase() == 'yes') {
            deleteData = await profileModel.deleteOne({userID: hooman})
            if (!deleteData) {
                msg.channel.send(`Sorry ${msg.author}, you don't have a character!`)
            }
            else {
                deleteMoney = await moneyModel.deleteOne({userID: hooman})
                msg.channel.send(`Character deleted!`)
            }
        }
        else {
            msg.channel.send(`Oh, no deletion occurred then!`)
        }
    });

}