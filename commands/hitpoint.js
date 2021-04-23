const profileModel = require('../models/profileSchema');
const hitpointModel = require('../models/hitpointSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
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
        if (profileData.conditions.blinded == "yes") {
            cond.push("Blinded")
        }
        if (profileData.conditions.charmed == "yes") {
            cond.push("Charmed")
        }
        if (profileData.conditions.deafened == "yes") {
            cond.push("Deafened")
        }
        if (profileData.conditions.frightened == "yes") {
            cond.push("Frightened")
        }
        if (profileData.conditions.grappled == "yes") {
            cond.push("Grappled")
        }
        if (profileData.conditions.incapacitated == "yes") {
            cond.push("Incapacitated")
        }
        if (profileData.conditions.invisible == "yes") {
            cond.push("Invisible")
        }
        if (profileData.conditions.paralyzed == "yes") {
            cond.push("Paralyzed")
        }
        if (profileData.conditions.petrified == "yes") {
            cond.push("Petrified")
        }
        if (profileData.conditions.poisoned == "yes") {
            cond.push("Poisoned")
        }
        if (profileData.conditions.prone == "yes") {
            cond.push("Prone")
        }
        if (profileData.conditions.restrained == "yes") {
            cond.push("Restrained")
        }
        if (profileData.conditions.stunned == "yes") {
            cond.push("Stunned")
        }
        if (profileData.conditions.unconscious == "yes") {
            cond.push("Unconscious")
        }
        if (profileData.conditions.exhaustion == "yes") {
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

        if (hitpointData.level == 1) {
            exp = 300
        }
        else if (hitpointData.level == 2) {
            exp = 900
        }
        else if (hitpointData.level == 3) {
            exp = 2700
        }
        else if (hitpointData.level == 4) {
            exp = 6500
        }
        else if (hitpointData.level == 5) {
            exp = 14000
        }
        else if (hitpointData.level == 6) {
            exp = 23000
        }
        else if (hitpointData.level == 7) {
            exp = 34000
        }
        else if (hitpointData.level == 8) {
            exp = 48000
        }
        else if (hitpointData.level == 9) {
            exp = 64000
        }
        else if (hitpointData.level == 10) {
            exp = 85000
        }
        else if (hitpointData.level == 11) {
            exp = 100000
        }
        else if (hitpointData.level == 12) {
            exp = 120000
        }
        else if (hitpointData.level == 13) {
            exp = 140000
        }
        else if (hitpointData.level == 14) {
            exp = 165000
        }
        else if (hitpointData.level == 15) {
            exp = 195000
        }
        else if (hitpointData.level == 16) {
            exp = 225000
        }
        else if (hitpointData.level == 17) {
            exp = 265000
        }
        else if (hitpointData.level == 18) {
            exp = 305000
        }
        else if (hitpointData.level == 19) {
            exp = 355000
        }
        else if (hitpointData.level == 20) {
            exp = 355000
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