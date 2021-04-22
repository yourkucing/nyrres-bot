const profileModel = require('../models/profileSchema');
const moneyModel = require('../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    u = "no"
    msg.channel.send(`Are you sure you want to delete? (Answer yes or no.)`)
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1, time: 30000}).then(collected => {
        if (collected.first().content.toLowerCase() == 'yes') {
            profileModel.deleteOne({userID: hooman}).then(result => {
                if (!result) {
                    msg.channel.send(`Sorry ${msg.author}, you don't have a character!`)
                }
                else {
                    moneyModel.deleteOne({userID: hooman}).then(deleted => {
                        if (!deleted) {
                            msg.channel.send(`I can't seem to find your wallet. It was probably stolen!`)
                        }
                        else {
                            msg.channel.send(`Character deleted!`)
                        }
                    });
                    
                }
            });
        }
        else {
            msg.channel.send(`Oh, no deletion occurred then!`)
        }
    }).catch(collected => {
        msg.channel.send('Oh, it must have been an accident then!');
        });

}