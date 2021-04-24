const profileModel = require('../models/profileSchema');
const inventoryModel = require('../models/inventorySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    profileData = await profileModel.findOne({userID: hooman})
    inventoryData = await inventoryModel.findOne({userID: hooman})
    if (!profileData || !inventoryData) {
        msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
    }
    else {
        equipment = inventoryData.equipment
        weapon = inventoryData.weapon
        mount = inventoryData.mount
        pet = inventoryData.pet

        if (equipment == null) {
            equipment = 'No equipments.'
        }
        if (weapon == null) {
            weapon = 'No weapons.'
        }
        if (mount == null) {
            mount = 'No mounts.'
        }
        if (pet == null) {
            pet = 'No pets.'
        }

        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`**${inventoryData.characterName}'s** Inventory`)
		.setDescription('You can see your money here.')
		.addFields(
		{ name: `Weapons`, value: `${weapon}`},
        { name: `Equipments`, value: `${equipment}`, inline: true},
        { name: `Mounts`, value: `${mount}`},
        { name: `Pets`, value: `${pet}`, inline: true}
		)
        .setThumbnail(`${url}`);
		msg.channel.send(embed);
    }
}