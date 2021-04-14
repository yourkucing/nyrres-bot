const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');
const { profile } = require('node:console');

module.exports.run = async(client, msg, profileData) => {
    msg.channel.send(`Your character name is ${profileData.characterName}.`)
}