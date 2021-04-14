const Discord = require('discord.js');
const profileModel = require('../models/profileSchema');

module.exports.run = async(client, msg) =>{
    msg.channel.send(`Greetings, ${msg.guild.members.cache.get(msg.author.id).displayName}. Please key in your (character name, race, class): ("exit" to exit.)\nExample: Athur Thorac, Human, Rogue`);
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1, time: 50000}).then(collected => {
        if (collected.first().content.toLowerCase() == 'exit') {
            msg.channel.send("Goodbye for now!");
        }
        else {
            nameInput = collected.first().content;
            msg.channel.send(`Please key in your class: ("exit" to exit.)`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1, time: 50000}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!");
                }
                else {
                    classInput = collected.first().content;
                    let profile = profileModel.create({
                        userID = msg.author.id,
                        serverID = msg.author.guild.id,
                        characterName = nameInput,
                        className = classInput,
                        race = None
                    });
                    profile.save();
                }
            }).catch(collected => {
                msg.channel.send('No reply after 50 seconds, profile creation cancelled!')
            })
        }
        }).catch(collected => {
            msg.channel.send('No reply after 50 seconds, profile creation cancelled!');
        });
}
