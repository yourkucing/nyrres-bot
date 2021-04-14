const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg) => {
	let hooman = msg.author.id
	let guild = msg.guild.id
	msg.channel.send(hooman, guild)
    msg.channel.send(`Greetings, ${msg.guild.members.cache.get(msg.author.id).displayName}. Please key in your character name: ("exit" to exit.)`);
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
        if (collected.first().content.toLowerCase() == 'exit') {
            msg.channel.send("Goodbye for now!");
        }
        else {
            nameInput = collected.first().content;
            msg.channel.send(`Please key in your class: ("exit" to exit.)`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!");
                }
                else {
                    classInput = collected.first().content;
                    let profile = profileModel.create({
                        userID: hooman,
                        serverID: guild,
                        characterName: nameInput,
                        className: classInput,
                        race: null
                    });
                }
            })
        }
        });
}

