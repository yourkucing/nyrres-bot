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

        if (weapon.length == 0) {
            weaponlist = 'No weapons.'
        }
        else {
            for (x in weapon) {
                weaponlist += weapon[x].item + '\n'
            }
        }
        if (equipment.length == 0) {
            equipmentlist = 'No equipments.'
        }
        else {
            for (x in equipment) {
                equipmentlist += equipment[x].item + '\n'
            }
        }
        if (mount.length == 0) {
            mountlist = 'No mounts.'
        }
        else {
            for (x in mount) {
                mountlist += mount[x].item + '\n'
            }
        }
        if (pet.length == 0) {
            petlist = 'No pets.'
        }
        else {
            for (x in pet) {
                petlist += pet[x].item + '\n'
            }
        }

        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`**${profileData.characterName}'s** Inventory`)
		.setDescription('You can see your inventory here.')
		.addFields(
		{ name: `:crossed_swords: Weapons`, value: `\`${weaponlist}\``, inline: true},
        { name: `:mage: Equipments`, value: `\`${equipmentlist}\``, inline: true},
        { name: `:racehorse: Mounts`, value: `\`${mountlist}\``},
        { name: `:wolf: Pets`, value: `\`${petlist}\``}
		)
        .setThumbnail(`${url}`);
		msg.channel.send(embed);
    }
}