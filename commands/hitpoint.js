const profileModel = require('../models/profileSchema');
const hitpointModel = require('../models/hitpointSchema');
const hplist = require('./hitpoints.json')
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    numbers = args.join()
    if (!msg.mentions.users.size) {
        let hooman = msg.author.id
        profileData = await profileModel.findOne({userID: hooman})
        hitpointData = await hitpointModel.findOne({userID: hooman})
        if (!profileData) {
            msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
        }
        else if (!hitpointData) {
            msg.channel.send(`Sorry ${msg.author}, there must have been a bug. Please contact Maryam#9206 if this continues.`)
        }
        else {
    
            cond = [];
            if (hitpointData.conditions.blinded == "yes") {
                cond.push("Blinded")
            }
            if (hitpointData.conditions.charmed == "yes") {
                cond.push("Charmed")
            }
            if (hitpointData.conditions.deafened == "yes") {
                cond.push("Deafened")
            }
            if (hitpointData.conditions.frightened == "yes") {
                cond.push("Frightened")
            }
            if (hitpointData.conditions.grappled == "yes") {
                cond.push("Grappled")
            }
            if (hitpointData.conditions.incapacitated == "yes") {
                cond.push("Incapacitated")
            }
            if (hitpointData.conditions.invisible == "yes") {
                cond.push("Invisible")
            }
            if (hitpointData.conditions.paralyzed == "yes") {
                cond.push("Paralyzed")
            }
            if (hitpointData.conditions.petrified == "yes") {
                cond.push("Petrified")
            }
            if (hitpointData.conditions.poisoned == "yes") {
                cond.push("Poisoned")
            }
            if (hitpointData.conditions.prone == "yes") {
                cond.push("Prone")
            }
            if (hitpointData.conditions.restrained == "yes") {
                cond.push("Restrained")
            }
            if (hitpointData.conditions.stunned == "yes") {
                cond.push("Stunned")
            }
            if (hitpointData.conditions.unconscious == "yes") {
                cond.push("Unconscious")
            }
            if (hitpointData.conditions.exhaustion == "yes") {
                cond.push("Exhaustion")
            }
    
            if (cond.length < 1) {
                cond.push("You have no conditions currently.")
            }
    
            exp = 0
            hpbar = '░░░░░░░░░░'
    
            hpdiff = (hitpointData.HP / hitpointData.maxHP) * 100
    
            if (hpdiff == 0) {
                hpbar = '░░░░░░░░░░'
            }
            else if (hpdiff > 0 && hpdiff <= 10) {
                hpbar = '█░░░░░░░░░'
            }
            else if (hpdiff > 10 && hpdiff <= 20) {
                hpbar = '██░░░░░░░░'
            }
            else if (hpdiff > 20 && hpdiff <= 30) {
                hpbar = '███░░░░░░░'
            }
            else if (hpdiff > 30 && hpdiff <= 40) {
                hpbar = '████░░░░░░'
            }
            else if (hpdiff > 40 && hpdiff <= 50) {
                hpbar = '█████░░░░░'
            }
            else if (hpdiff > 50 && hpdiff <= 60) {
                hpbar = '██████░░░░'
            }
            else if (hpdiff > 60 && hpdiff <= 70) {
                hpbar = '███████░░░'
            }
            else if (hpdiff > 70 && hpdiff <= 80) {
                hpbar = '████████░░'
            }
            else if (hpdiff > 80 && hpdiff <= 90) {
                hpbar = '█████████░'
            }
            else if (hpdiff > 90 && hpdiff <= 100) {
                hpbar = '██████████'
            }
    
            for (x in hplist) {
                if (hitpointData.level == hplist[x].level) {
                    exp = hplist[x].exp
                }
            } 
    
            num = (hitpointData.experience/exp)*100
    
            url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setTitle(`**${hitpointData.characterName}'s** Experience and Hitpoints`)
            .addFields(
            { name: `Character`, value: `Class: ${hitpointData.class}\nLevel: ${hitpointData.level}\nExperience: ${hitpointData.experience}/${exp} (${num.toFixed(2)}%)`},
            { name: `Health Points`, value: `HP: ${hitpointData.HP}/${hitpointData.maxHP}\n${hpbar}`},
            { name: `Conditions`, value: `${cond}`}
            )
            .setThumbnail(`${url}`);
            msg.channel.send(embed);
        }
    }
    else {
        if (msg.author.id == "279101053750870017") {
            hooman = msg.mentions.members.first()
            msg.channel.send(`Exp or HP?`)
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!")
                }
                else {
                    change = collected.first().content.toLowerCase()
                    msg.channel.send(`How much?`)
                    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                        number = parseInt(collected.first().content)
                        msg.channel.send(number)
                        if (change == "exp") {
                            hitpointModel.findOneAndUpdate({userID: hooman},
                                {
                                    $inc: { 
                                        experience: number
                                    }
                                }).then(change => {
                                    if (change) {
                                        msg.channel.send("EXP changed!")
                                    }
                                    else {
                                        console.log("Something went wrong when changing EXP.")
                                        console.log(change)
                                    }
                                })
                        }
                        else if (change == "hp") {
                            hitpointModel.findOneAndUpdate({userID: hooman},
                                {
                                    $inc: { 
                                        HP: number
                                    }
                                }).then(change => {
                                    if (change) {
                                        msg.channel.send("HP changed!")
                                    }
                                    else {
                                        console.log("Something went wrong when changing HP.")
                                        console.log(change)
                                    }
                                })
                        }
                    })
                }
            })
        }
        else {
            msg.channel.send("You're not the DM. Ask your DM to do this!")
        }
        

    }

}