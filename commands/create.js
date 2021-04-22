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
            msg.channel.send(`Please state your gender: Female, Male, Nonbinary`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!")
                }
                else {
                    genderInput = collected.first().content;
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
                                            ability = ability.sort(function(a, b){return b-a});
                                            msg.channel.send(`**Your ability points:**\nStrength: ${ability[0]}\nDexterity: ${ability[1]}\nConstitution: ${ability[2]}\nIntellect: ${ability[3]}\nWisdom: ${ability[4]}\nCharisma: ${ability[5]}`);
                                            
                                            extraS = 0
                                            extraD = 0
                                            extraC = 0
                                            extraI = 0
                                            extraW = 0
                                            extraCh = 0
        
                                            if (raceInput.toLowerCase() == 'dragonborn') {
                                                extraS = 2
                                                extraC = 1
                                            }
                                            else if (raceInput.toLowerCase() == 'dwarf') {
                                                extraC = 2
                                            } 
                                            else if (raceInput.toLowerCase() == 'elf') {
                                                extraD = 2
                                            }
                                            else if (raceInput.toLowerCase() == 'gnome') {
                                                extraI = 2
                                            }
                                            else if (raceInput.toLowerCase() == 'half-elf') {
                                                extraC = 2
                                                msg.channel.send(`Choose two of (strength, dexterity, intellect, charisma, wisdom) in this format: 1st choice, 2nd choice`)
                                                msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                                                    choices = collected.first().content.toLowerCase()
                                                    choices = choices.replace(/\s+/g, '')
                                                    choices = choices.split(",")
                                                    if (choices[0] == 'strength') {
                                                        extraS = 1
                                                    }
                                                    else if (choices[0] == 'dexterity') {
                                                        extraD = 1
                                                    }
                                                    else if (choices[0] == 'intellect') {
                                                        extraI = 1
                                                    }
                                                    else if (choices[0] == 'charisma') {
                                                        extraCh = 1
                                                    }
                                                    else if (choices[0] == 'wisdom') {
                                                        extraW = 1
                                                    }
                                                    else {
                                                        msg.channel.send(`No idea what you just placed as your first choice. Check back later.`)
                                                    }
        
                                                    if (choices[1] == 'strength') {
                                                        extraS = 1
                                                    }
                                                    else if (choices[1] == 'dexterity') {
                                                        extraD = 1
                                                    }
                                                    else if (choices[1] == 'intellect') {
                                                        extraI = 1
                                                    }
                                                    else if (choices[1] == 'charisma') {
                                                        extraCh = 1
                                                    }
                                                    else if (choices[1] == 'wisdom') {
                                                        extraW = 1
                                                    }
                                                    else {
                                                        msg.channel.send(`No idea what you just placed as your second choice. Check back later.`)
                                                    }
                                                });
                                            }
                                            else if (raceInput.toLowerCase() == 'halfling') {
                                                extraD = 2
                                            }
                                            else if (raceInput.toLowerCase() == 'half-orc') {
                                                extraS = 2
                                                extraC = 1
                                            }
                                            else if (raceInput.toLowerCase() == 'human') {
                                                extraS = 1
                                                extraD = 1
                                                extraC = 1
                                                extraW = 1
                                                extraI = 1
                                                extraCh = 1
                                            }
                                            else if (raceInput.toLowerCase() == 'tiefling') {
                                                extraCh = 2
                                                extraI = 1
                                            }
                                            else {
                                                msg.channel.send(`Either you put a race that is not on the list or you spelled something wrongly, either way, no added traits have been added to your Ability Scores.`)
                                            }
                                            let profile;
                                            try {
                                                profile = profileModel.create({
                                                    userID: hooman,
                                                    serverID: guild,
                                                    characterName: nameInput,
                                                    gender: genderInput,
                                                    class: classInput,
                                                    race: raceInput,
                                                    alignment: alignmentInput,
                                                    ability: {
                                                        strength: ability[0] + extraS,
                                                        dexterity: ability[1] + extraD,
                                                        constitution: ability[2] + extraC,
                                                        intellect: ability[3] + extraI,
                                                        wisdom: ability[4] + extraW,
                                                        charisma: ability[5] + extraCh
                                                    }
                                                });
                                                msg.channel.send(`Character saved!`)
                                            } catch (err) {
                                                console.log(err)
                                            }
                                            
                                        }
                                    });
        
                            }
                            });
                        }
                    });
                }
            });

        }
        });
}

