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
                console.log(x)
                console.log(weaponlist)
            }
        }
        if (!equipment) {
            equipmentlist = 'No equipments.'
            console.log('ok')
        }
        else {
            for (x in equipment) {
                equipmentlist += x.item + '\n'
            }
            console.log(equipmentlist)
        }
        if (!mount) {
            mountlist = 'No mounts.'
            console.log('ok')
        }
        else {
            for (x in mount) {
                mountlist += x.item + '\n'
            }
            console.log(mountlist)
        }
        if (!pet) {
            petlist = 'No pets.'
            console.log('ok')
        }
        else {
            for (x in pet) {
                petlist += x.item + '\n'
            }
            console.log(petlist)
        }

        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`**${profileData.characterName}'s** Inventory`)
		.setDescription('You can see your money here.')
		.addFields(
		{ name: `Weapons`, value: `${weaponlist}`, inline: true},
        { name: `Equipments`, value: `${equipmentlist}`, inline: true},
        { name: `Mounts`, value: `${mountlist}`},
        { name: `Pets`, value: `${petlist}`}
		)
        .setThumbnail(`${url}`);
		msg.channel.send(embed);
    }
}