const profileModel = require('../models/profileSchema');
const inventoryModel = require('../models/inventorySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    profileData = await profileModel.findOne({userID: hooman})
    if (!profileData) {
        msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
    }
    else {
        weapon = await inventoryModel.find({userID: hooman, category: 'weapon'})
        equipment = await inventoryModel.find({userID: hooman, category: 'equipment'})
        mount = await inventoryModel.find({userID: hooman, category: 'mount'})
        pet = await inventoryModel.find({userID: hooman, category: 'pet'})

        weaponlist = ''
        equipmentlist = ''
        mountlist = ''
        petlist = ''

        if (!weapon) {
            weaponlist = 'No weapons.'
        }
        else {
            for (x in weapon) {
                weaponlist += x.item + '\n'
            }
        }
        if (!equipment) {
            equipmentlist = 'No equipments.'
        }
        else {
            for (x in equipment) {
                equipmentlist += x.item + '\n'
            }
        }
        if (!mount) {
            mountlist = 'No mounts.'
        }
        else {
            for (x in mount) {
                mountlist += x.item + '\n'
            }
        }
        if (!pet) {
            petlist = 'No pets.'
        }
        else {
            for (x in pet) {
                petlist += x.item + '\n'
            }
        }
        console.log(weapon)

        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`**${profileData.characterName}'s** Inventory`)
		.setDescription('You can see your money here.')
		.addFields(
		{ name: `Weapons`, value: `${weapon.item}`, inline: true},
        { name: `Equipments`, value: `${equipment.item}`, inline: true},
        { name: `Mounts`, value: `${mount.item}`},
        { name: `Pets`, value: `${pet.item}`}
		)
        .setThumbnail(`${url}`);
		msg.channel.send(embed);
    }
}