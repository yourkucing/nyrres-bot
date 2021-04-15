const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	let hooman = msg.author.id;
	let guild = msg.guild.id;
    msg.channel.send(`Greetings, ${msg.guild.members.cache.get(msg.author.id).displayName}. Please key in your character name: ("exit" to exit.)`);
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
        if (collected.first().content.toLowerCase() == 'exit') {
            msg.channel.send("Goodbye for now!");
        }
        else {
            nameInput = collected.first().content;
            msg.channel.send(`Please choose a race: ("exit" to exit.)\nRefer to _ny race_ if need be.`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!");
                }
                else {
                    raceInput = collected.first().content;
                    msg.channel.send(`Please choose a class: ("exit" to exit.)\nRefer to _ny class_ if need be.`);
                    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                        if (collected.first().content.toLowerCase() == 'exit') {
                            msg.channel.send("Goodbye for now!")
                        }
                        else {
                            classInput = collected.first().content;
                            msg.channel.send(`Please choose an alignment: ("exit" to exit.)\nAlignment:\nLawful good, Neutral good, Chaotic good, Lawful neutral, Neutral, Chaotic neutral, Lawful evil, Neutral evil, Chaotic evil.\nYou can refer to *ny alignments* for more details.`);
                            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                                if (collected.first().content.toLowerCase() == 'exit') {
                                    msg.channel.send("Goodbye for now!")
                                }
                                else {
                                    alignmentInput = collected.first().content;
                                    msg.channel.send('Time to roll for your ability points! ');
                                    let times = 0
                                    ability = []
                                    while (times < 6) {
                                        n = 0
                                        L = []
                                        while (n < 3) {
                                            result = Math.floor(Math.random() * 6) + 1
                                            L.push(result)
                                            n = n + 1
                                        }
                                        total = L.reduce((a, b) => a + b)
                                        msg.channel.send("```\nResult: " + total + "\nDetails: 3d6 (" + L + ")\n```");
                                        ability.push(total)
                                        times = times + 1
                                    }
                                    msg.channel.send(`**Your ability points:**\nStrength: ${ability[0]}\nDexterity: ${ability[1]}\nConstitution: ${ability[2]}\nIntellect: ${ability[3]}\nWisdom: ${ability[4]}\nCharisma: ${ability[5]}`);

                                    let profile;
                                    try {
                                        profile = profileModel.create({
                                            userID: hooman,
                                            serverID: guild,
                                            characterName: nameInput,
                                            class: classInput,
                                            race: raceInput,
                                            alignment: alignmentInput,
                                            ability: {
                                                strength: ability[0],
                                                dexterity: ability[1],
                                                constitution: ability[2],
                                                intellect: ability[3],
                                                wisdom: ability[4],
                                                charisma: ability[5]
                                            }
                                        });
                                        profile.save(); 
                                        msg.channel.send(`Character saved!`)
                                    } catch (err) {
                                        console.log(err)
                                    }
                                    
                                }
                            });

                    }
                    });
                }
            })
        }
        });
}

