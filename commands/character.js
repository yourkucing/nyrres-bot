const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, profileData) => {
    msg.channel.send(`Your character name is ${profileData.characterName}.`)
}