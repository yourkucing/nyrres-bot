const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg) => {
	let hooman = msg.author.id
	let guild = msg.guild.id
    profileData = profileModel.find({ userID: '279101053750870017'})
    if(!profileData){
        msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using __ny profileCreate__!`)
    }
    else {
        msg.channel.send(`Your character name is ${profileData.characterName}.`)
        console.log(profileData)
    }

}