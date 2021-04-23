const profileModel = require('../models/profileSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    profileData = await profileModel.findOne({userID: hooman})
    if (!profileData) {
        msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
    }
    else {
        if (profileData.notes == null) {
            notes = 'No notes'
        }
        else {
            notes = profileData.notes
        }
        if (profileData.hitdie == null || profileData.savingthrows == null) {
            url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setTitle(`**${msg.guild.members.cache.get(hooman).displayName}'s** Character Profile`)
            .setDescription('You can see your character profile here.')
            .addFields(
            { name: 'Profile', value: `Character Name: ${profileData.characterName}\nGender: ${profileData.gender}\nClass: ${profileData.class}\nRace: ${profileData.race}\nLevel: ${profileData.level}\nAlignment: ${profileData.alignment}\nProficiency Bonus: +${profileData.proficiency}`},
            { name: 'Ability', value: `Strength: ${profileData.ability.strength}\nDexterity: ${profileData.ability.dexterity}\nConstitution: ${profileData.ability.constitution}\nIntellect: ${profileData.ability.intellect}\nWisdom: ${profileData.ability.wisdom}\nCharisma: ${profileData.ability.charisma}`},
            { name: 'Notes', value: `${notes}`}
            )
            .setThumbnail(`${url}`);
            msg.channel.send(embed);
        }
        else {
            url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setTitle(`**${msg.guild.members.cache.get(hooman).displayName}'s** Character Profile`)
            .setDescription('You can see your character profile here.')
            .addFields(
            { name: 'Profile', value: `Character Name: ${profileData.characterName}\nGender: ${profileData.gender}\nClass: ${profileData.class}\nRace: ${profileData.race}\nLevel: ${profileData.level}\nAlignment: ${profileData.alignment}\nProficiency Bonus: +${profileData.proficiency}\nSaving Throw: ${profileData.savingthrows}\nHit Die: ${profileData.hitdie}`},
            { name: 'Ability', value: `Strength: ${profileData.ability.strength}\nDexterity: ${profileData.ability.dexterity}\nConstitution: ${profileData.ability.constitution}\nIntellect: ${profileData.ability.intellect}\nWisdom: ${profileData.ability.wisdom}\nCharisma: ${profileData.ability.charisma}`},
            { name: 'Notes', value: `${notes}`}
            )
            .setThumbnail(`${url}`);
            msg.channel.send(embed);
        }

    }
}