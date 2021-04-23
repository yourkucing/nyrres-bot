const profileModel = require('../models/profileSchema');
const hitpointModel = require('../models/hitpointSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
	let hooman = msg.author.id;
	let guild = msg.guild.id;
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
        }
    }
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
                            msg.channel.send(`Please choose a subrace: ("exit" to exit.)\nRefer to _ny race_ if need be.\nDwarf: Hill Dwarf or Mountain Dwarf\nElf: Eladrin, High Elf or Wood Elf\nGnome: Deep Gnome or Rock Gnome\nHalfling: Lightfoot Halfling or Stout Halfling\nIf your character is not part of these, please answer "None" `)
                            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                                if (collected.first().content.toLowerCase() == 'exit') {
                                    msg.channel.send("Goodbye for now!")
                                }
                                else {
                                    subraceInput = collected.first().content;
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

                                                    hitdie = 0
                                                    savingthrows = null
                                                    hp = null

                                                    strength = ability[0]
                                                    dexterity = ability[1]
                                                    constitution = ability[2]
                                                    wisdom = ability[3]
                                                    intellect = ability[4]
                                                    charisma = ability[5]

                                                    ability = ability.sort(function(a, b){return b-a})

                                                    if (classInput.toLowerCase() == 'barbarian') {
                                                        strength = ability[0]
                                                        constitution = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        intellect = ability[1]
                                                        wisdom = ability[2]
                                                        charisma = ability[3]

                                                        hitdie = 'd12'
                                                        savingthrows = 'Strength & Constitution'
                                                        hp = 12
                                                    }
                                                    else if (classInput.toLowerCase() == 'bard') {
                                                        charisma = ability[0]
                                                        dexterity = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        strength = ability[0]
                                                        intellect = ability[1]
                                                        wisdom = ability[2]
                                                        constitution = ability[3]

                                                        hitdie = 'd8'
                                                        savingthrows = 'Dexterity & Charisma'
                                                        hp = 8
                                                    }
                                                    else if (classInput.toLowerCase() == 'cleric') {
                                                        wisdom = ability[0]
                                                        strength = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        intellect = ability[1]
                                                        constitution = ability[2]
                                                        charisma = ability[3]

                                                        hitdie = 'd8'
                                                        savingthrows = 'Wisdom & Charisma'
                                                        hp = 8
                                                    }
                                                    else if (classInput.toLowerCase() == 'druid') {
                                                        wisdom = ability[0]
                                                        constitution = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        intellect = ability[1]
                                                        strength = ability[2]
                                                        charisma = ability[3]

                                                        hitdie = 'd8'
                                                        savingthrows = 'Intellect & Wisdom'
                                                        hp = 8
                                                    }
                                                    else if (classInput.toLowerCase() == 'fighter') {
                                                        strength = ability[0]
                                                        constitution = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        intellect = ability[1]
                                                        wisdom = ability[2]
                                                        charisma = ability[3]

                                                        hitdie = 'd10'
                                                        savingthrows = 'Strength & Constitution'
                                                        hp = 10
                                                    }
                                                    else if (classInput.toLowerCase() == 'monk') {
                                                        dexterity = ability[0]
                                                        wisdom = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        strength = ability[0]
                                                        intellect = ability[1]
                                                        constitution = ability[2]
                                                        charisma = ability[3]

                                                        hitdie = 'd8'
                                                        savingthrows = 'Strength & Dexterity'
                                                        hp = 8
                                                    }
                                                    else if (classInput.toLowerCase() == 'paladin') {
                                                        strength = ability[0]
                                                        charisma = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        intellect = ability[1]
                                                        wisdom = ability[2]
                                                        constitution = ability[3]

                                                        hitdie = 'd10'
                                                        savingthrows = 'Wisdom & Charisma'
                                                        hp = 10
                                                    }
                                                    else if (classInput.toLowerCase() == 'ranger') {
                                                        dexterity = ability[0]
                                                        wisdom = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        strength = ability[0]
                                                        intellect = ability[1]
                                                        charisma = ability[2]
                                                        constitution = ability[3]

                                                        hitdie = 'd10'
                                                        savingthrows = 'Strength & Dexterity'
                                                        hp = 10
                                                    }
                                                    else if (classInput.toLowerCase() == 'rogue') {
                                                        dexterity = ability[0]
                                                        charisma = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        strength = ability[0]
                                                        intellect = ability[1]
                                                        wisdom = ability[2]
                                                        constitution = ability[3]

                                                        hitdie = 'd8'
                                                        savingthrows = 'Dexterity & Intellect'
                                                        hp = 8
                                                    }
                                                    else if (classInput.toLowerCase() == 'sorcerer') {
                                                        charisma = ability[0]
                                                        constitution = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        intellect = ability[1]
                                                        wisdom = ability[2]
                                                        strength = ability[3]

                                                        hitdie = 'd6'
                                                        savingthrows = 'Constitution & Charisma'
                                                        hp = 6
                                                    }
                                                    else if (classInput.toLowerCase() == 'warlock') {
                                                        charisma = ability[0]
                                                        constitution = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        intellect = ability[1]
                                                        wisdom = ability[2]
                                                        strength = ability[3]

                                                        hitdie = 'd8'
                                                        savingthrows = 'Wisdom & Charisma'
                                                        hp = 8
                                                    }
                                                    else if (classInput.toLowerCase() == 'wizard') {
                                                        intellect = ability[0]
                                                        constitution = ability[1]

                                                        ability.splice(0,2)
                                                        shuffle(ability)
                                                        dexterity = ability[0]
                                                        strength = ability[1]
                                                        wisdom = ability[2]
                                                        charisma = ability[3]

                                                        hitdie = 'd6'
                                                        savingthrows = 'Intellect & Wisdom'
                                                        hp = 6
                                                    }
                                                    else {
                                                        msg.channel.send(`I don't have your class in my system. Either way, I'll just randomly put it then!`)
                                                    }
                                                    msg.channel.send(`**Your ability points:**\nStrength: ${strength}\nDexterity: ${dexterity}\nConstitution: ${constitution}\nIntellect: ${intellect}\nWisdom: ${wisdom}\nCharisma: ${charisma}`);
                                                    
                                                    extraS = 0
                                                    extraD = 0
                                                    extraC = 0
                                                    extraI = 0
                                                    extraW = 0
                                                    extraCh = 0
                
                                                    if (raceInput.toLowerCase() == 'dragonborn') {
                                                        extraS += 2
                                                        extraC += 1
                                                    }
                                                    else if (raceInput.toLowerCase() == 'dwarf') {
                                                        extraC += 2
                                                    } 
                                                    else if (raceInput.toLowerCase() == 'elf') {
                                                        extraD += 2
                                                    }
                                                    else if (raceInput.toLowerCase() == 'gnome') {
                                                        extraI += 2
                                                    }
                                                    else if (raceInput.toLowerCase() == 'half-elf') {
                                                        extraC += 2
                                                        choices = ['strength', 'dexterity', 'intellect', 'charisma', 'wisdom']
                                                        shuffle(choices)
                                                        if (choices[0] == 'strength') {
                                                            extraS += 1
                                                        }
                                                        else if (choices[0] == 'dexterity') {
                                                            extraD += 1
                                                        }
                                                        else if (choices[0] == 'intellect') {
                                                            extraI += 1
                                                        }
                                                        else if (choices[0] == 'charisma') {
                                                            extraCh += 1
                                                        }
                                                        else if (choices[0] == 'wisdom') {
                                                            extraW += 1
                                                        }
            
                                                        if (choices[1] == 'strength') {
                                                            extraS += 1
                                                        }
                                                        else if (choices[1] == 'dexterity') {
                                                            extraD += 1
                                                        }
                                                        else if (choices[1] == 'intellect') {
                                                            extraI += 1
                                                        }
                                                        else if (choices[1] == 'charisma') {
                                                            extraCh += 1
                                                        }
                                                        else if (choices[1] == 'wisdom') {
                                                            extraW += 1
                                                        }
                                                    }
                                                    else if (raceInput.toLowerCase() == 'halfling') {
                                                        extraD += 2
                                                    }
                                                    else if (raceInput.toLowerCase() == 'half-orc') {
                                                        extraS += 2
                                                        extraC += 1
                                                    }
                                                    else if (raceInput.toLowerCase() == 'human') {
                                                        extraS += 1
                                                        extraD += 1
                                                        extraC += 1
                                                        extraW += 1
                                                        extraI += 1
                                                        extraCh += 1
                                                    }
                                                    else if (raceInput.toLowerCase() == 'tiefling') {
                                                        extraCh += 2
                                                        extraI += 1
                                                    }
                                                    else {
                                                        msg.channel.send(`Either you put a race that is not on the list or you spelled something wrongly, either way, no added traits have been added to your Ability Scores.`)
                                                    }

                                                    if (subraceInput.toLowerCase() == 'hill dwarf') {
                                                        extraW += 1
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'mountain dwarf') {
                                                        extraS += 2
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'eladrin') {
                                                        extraI += 1
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'high elf') {
                                                        extraI += 1
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'wood elf') {
                                                        extraW += 1
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'deep gnome') {
                                                        extraD += 1
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'rock gnome') {
                                                        extraC += 1
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'lightfoot halfling') {
                                                        extraCh += 1
                                                    }
                                                    else if (subraceInput.toLowerCase() == 'stout halfling') {
                                                        extraC += 1
                                                    }
                                                    else {
                                                        msg.channel.send(`You either don't have a subrace or you spelled it wrongly. Either way, do check back later!`)
                                                    }
                                                    if (subraceInput.toLowerCase == 'none') {
                                                        subraceInput = null
                                                    }

                                                    try {
                                                        let profile = profileModel.create({
                                                            userID: hooman,
                                                            serverID: guild,
                                                            characterName: nameInput,
                                                            gender: genderInput,
                                                            class: classInput,
                                                            race: raceInput,
                                                            subrace: subraceInput,
                                                            alignment: alignmentInput,
                                                            savingthrows: savingthrows,
                                                            hitdie: hitdie,
                                                            ability: {
                                                                strength: strength + extraS,
                                                                dexterity: dexterity + extraD,
                                                                constitution: constitution + extraC,
                                                                intellect: intellect + extraI,
                                                                wisdom: wisdom + extraW,
                                                                charisma: charisma + extraCh
                                                            }
                                                        });
                                                        let hitpoint = hitpointModel.create({
                                                            userID: hooman,
                                                            serverID: guild,
                                                            characterName: nameInput,
                                                            class: classInput,
                                                            HP: hp + constitution + extraC,
                                                            maxHP: hp + constitution + extraC
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
})
}

