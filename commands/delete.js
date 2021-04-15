const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    deleteData = await profileModel.deleteOne({userID: hooman})
    if (!deleteData) {
        msg.channel.send(`Sorry ${msg.author}, you don't have a character!`)
    }
    else if (deleteData.acknowledged == true) {
        msg.channel.send(`Character deleted!`)
    }
}