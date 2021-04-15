const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    profileData = await profileModel.findOne({userID: hooman})
    if (!profileData) {
        msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
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

        if (cond == null) {
            cond.push("You have no conditions currently.")
        }

        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`**${hooman.displayName}'s** Character Profile`)
		.setDescription('You can see your character profile here.')
		.addFields(
		{ value: `Character Name: ${profileData.characterName}\nClass: ${profileData.class}\nRace: ${profileData.race}\nLevel: ${profileData.level}\nAlignment: ${profileData.alignment}`},
		{ name: 'Ability', value: `Strength: ${profileData.ability.strength}\nDexterity: ${profileData.ability.dexterity}\nConstitution: ${profileData.ability.constitution}\nIntellect: ${profileData.ability.intellect}\nWisdom: ${profileData.ability.wisdom}\nCharisma: ${profileData.ability.charisma}`}
		// { name: 'Conditions', value: `${cond}` },
		);
        // .setThumbnail(hooman.avatarURL());
		msg.channel.send(embed);
    }
}