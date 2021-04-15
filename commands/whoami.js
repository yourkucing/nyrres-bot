const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	let hooman = msg.author.id
	let guild = msg.guild.id
    profileData = await profileModel.findOne({userID: hooman})
    if(!profileData){
        msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using _ny profileCreate_!`)
    }
    else {
        msg.channel.send(`Your character name is ${profileData.characterName}.`)
        console.log(profileData)
    }

}