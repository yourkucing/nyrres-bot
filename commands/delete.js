const profileModel = require('../models/profileSchema');
const moneyModel = require('../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    u = "no"
    msg.channel.send(`Are you sure you want to delete? (Answer yes or no.)`)
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1, time: 30000}).then(collected => {
        if (collected.first().content.toLowerCase() == 'yes') {
            try {
                deleteData = await profileModel.deleteOne({userID: hooman})
                if (!deleteData) {
                    msg.channel.send(`Sorry ${msg.author}, you don't have a character!`)
                }
                else {
                    try {
                        deleteMoney = await moneyModel.deleteOne({userID: hooman})
                        msg.channel.send(`Character deleted!`)
                    } catch (err) {
                        console.log(err)
                    }
                }
            } catch (err) {
                console.log(err)
            }
        }
        else {
            msg.channel.send(`Oh, no deletion occurred then!`)
        }
    }).catch(collected => {
        msg.channel.send('Oh, it must have been an accident then!');
        });

}