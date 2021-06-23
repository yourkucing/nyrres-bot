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
        if (!args[0]) {
            weapon = await inventoryModel.find({userID: hooman, category: 'weapon'})
            used1 = await inventoryModel.find({userID: hooman, category: 'weapon'}).countDocuments()
            equipment = await inventoryModel.find({userID: hooman, category: 'equipment'})
            used2 = await inventoryModel.find({userID: hooman, category: 'equipment'}).countDocuments()
            mount = await inventoryModel.find({userID: hooman, category: 'mount'})
            used3 = await inventoryModel.find({userID: hooman, category: 'mount'}).countDocuments()
            pet = await inventoryModel.find({userID: hooman, category: 'pet'})
            used4 = await inventoryModel.find({userID: hooman, category: 'pet'}).countDocuments()
            consumable = await inventoryModel.find({userID: hooman, category: 'consumable'})
            used5 = await inventoryModel.find({userID: hooman, category: 'consumable'}).countDocuments()
            space = await inventoryModel.findOne({userID: hooman, category: 'space'})

            used = used1 + used2 + used3 + used4 + used5
            weaponlist = ''
            equipmentlist = ''
            mountlist = ''
            petlist = ''
            consumablelist = ''
            space = parseInt(space.item)

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
            if (consumable.length == 0) {
                consumablelist = 'No consumables.'
            }
            else {
                for (x in consumable) {
                    consumablelist += consumable[x].item + '\n'
                }
            }

            url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setTitle(`**${profileData.characterName}'s** Inventory`)
            .setDescription(`Inventory space: ${space - used}/${space}`)
            .addFields(
            { name: `:crossed_swords: Weapons`, value: `\`${weaponlist}\``, inline: true},
            { name: `:mage: Equipments`, value: `\`${equipmentlist}\``, inline: true},
            { name: `:sandwich: Consumables`, value: `\`${consumablelist}\``, inline: false},
            { name: `:racehorse: Mounts`, value: `\`${mountlist}\``, inline: true},
            { name: `:wolf: Pets`, value: `\`${petlist}\``, inline: true}
            )
            .setThumbnail(`${url}`);
            msg.channel.send(embed);
        }
        else if (args[0] == "insert") {
            msg.channel.send(`Please key in item name: ("exit" to exit.)`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!");
                    return
                }
                else {
                    itemname = collected.first().content
                    msg.channel.send(`Please key in the type (weapon, equipment, mount, pet, consumable): ("exit" to exit.)`)
                    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                        if (collected.first().content.toLowerCase() == 'exit') {
                            msg.channel.send("Goodbye for now!");
                            return
                        }
                        else {
                            typename = collected.first().content
                            let inventory = inventoryModel.create({
                                userID: hooman,
                                serverID: msg.guild.id,
                                characterName: profileData.characterName,
                                item: itemname,
                                category: typename
                            });
                            msg.channel.send(`Item saved!`)
                        }
                    })
                }
            })
        }
        else if (args[0] == "delete") {
            msg.channel.send(`Please key in item name: ("exit" to exit.)`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!");
                    return
                }
                else {
                    item = collected.first().content 
                    inventoryModel.findOneAndDelete({userID: hooman, item: item}).then(itemsearch => {
                        if (itemsearch) {
                            msg.channel.send(`Item deleted!`)
                        }
                        else {
                            msg.channel.send(`No such item!`)
                        }
                    })
                }
            })
        }
    }
}