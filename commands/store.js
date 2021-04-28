const profileModel = require('../models/profileSchema');
const storeModel = require('../models/storeSchema');
const Discord = require('discord.js');
const { MongooseDocument } = require('mongoose');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    storeData = await storeModel.find()
    if (!storeData) {
        msg.channel.send(`Sorry ${msg.author}, the shop is closed as it has ran out of stocks. Please come back at a later time.`)
    }
    else {
        weapon = await storeModel.find({category: 'weapon'})
        equipment = await storeModel.find({category: 'equipment'})
        mount = await storeModel.find({category: 'mount'})
        pet = await storeModel.find({category: 'pet'})

        weaponlist = ''
        equipmentlist = ''
        mountlist = ''
        petlist = ''

        if (weapon.length == 0) {
            weaponlist = 'No weapons.'
        }
        else {
            for (x in weapon) {
                weaponlist += weapon[x].item + '\n' + weapon[x].price[0] + 'CP' + weapon[x].price[1] + 'SP' + weapon[x].price[2] + 'EP' + weapon[x].price[3] + 'GP' + weapon[x].price[4] + 'PP\n\n'
            }
        }
        if (equipment.length == 0) {
            equipmentlist = 'No equipments.'
        }
        else {
            for (x in equipment) {
                equipmentlist += equipment[x].item + '\n' + equipment[x].price[0] + 'CP' + equipment[x].price[1] + 'SP' + equipment[x].price[2] + 'EP' + equipment[x].price[3] + 'GP' + equipment[x].price[4] + 'PP\n\n'
            }
        }
        if (mount.length == 0) {
            mountlist = 'No mounts.'
        }
        else {
            for (x in mount) {
                mountlist += mount[x].item + '\n' + mount[x].price[0] + 'CP' + mount[x].price[1] + 'SP' + mount[x].price[2] + 'EP' + mount[x].price[3] + 'GP' + mount[x].price[4] + 'PP\n\n'
            }
        }
        if (pet.length == 0) {
            petlist = 'No pets.'
        }
        else {
            for (x in pet) {
                petlist += pet[x].item + '\n' + pet[x].price[0] + 'CP' + pet[x].price[1] + 'SP' + pet[x].price[2] + 'EP' + pet[x].price[3] + 'GP' + pet[x].price[4] + 'PP\n\n'
            }
        }

        let page = 1;
        url = `https://i.pinimg.com/originals/0e/39/04/0e39041593d65e52ac525ebaff57fe29.png`
        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`Tayo's Market`)
		.setDescription(`You can purchase items here.\n\`Click on the arrow reactions to change pages. Once you're done, you can click on the STOP reaction.\``)
		.addFields(
		{ name: `:crossed_swords: Weapons`, value: `\`${weaponlist}\``}
		)
        .setThumbnail(`${url}`)
        .setFooter(`Page ${page} of 4.`);
		msg.channel.send(embed).then(msg => {
            msg.react('⏪').then(r => {
                msg.react('⏩')
                msg.react('🚫')
    
                const backwardsFilter = (reaction, user) => {
                    return reaction.emoji.name === '⏪' && !user.bot;
                };
                const forwardsFilter = (reaction, user) => {
                    return reaction.emoji.name === '⏩' && !user.bot;
                };
                const stopFilter = (reaction, user) => {
                    return reaction.emoji.name === '🚫' && !user.bot;
                }
                //3600000
    
                const backwards = msg.createReactionCollector(backwardsFilter, { time: 3600000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 3600000 });
                const stop = msg.createReactionCollector(stopFilter, { time: 3600000 });

                backwards.on('collect', (reaction, user) => {
                    if (page === 1) return;
                    page--;
                    embed.fields = []
                    if (page == 1) {
                        embed.addFields(
                            { name: `:crossed_swords: Weapons`, value: `\`${weaponlist}\``}
                        )
                        embed.setFooter(`Page ${page} of 4.`);
                        msg.edit(embed)
                    }
                    else if (page == 2) {
                        embed.addFields(
                            { name: `:mage: Equipments`, value: `\`${equipmentlist}\``}
                        )
                        embed.setFooter(`Page ${page} of 4.`);
                        msg.edit(embed)
                    }
                    else if (page == 3) {
                        embed.addFields(
                            { name: `:racehorse: Mounts`, value: `\`${mountlist}\``}
                        )
                        embed.setFooter(`Page ${page} of 4.`);
                        msg.edit(embed)
                    }
                    msg.reactions.resolve('⏪').users.remove(hooman.id);
                })

                backwards.on('end', collected => {
                    msg.reactions.cache.get('⏪').remove()
                })

                forwards.on('collect', (reaction, user) => {
                    if (page === 4) return;
                    page++;
                    embed.fields = []
                    if (page == 2) {
                        embed.addFields(
                            { name: `:mage: Equipments`, value: `\`${equipmentlist}\``}
                        )
                        embed.setFooter(`Page ${page} of 4.`);
                        msg.edit(embed)
                    }
                    else if (page == 3) {
                        embed.addFields(
                            { name: `:racehorse: Mounts`, value: `\`${mountlist}\``}
                        )
                        embed.setFooter(`Page ${page} of 4.`);
                        msg.edit(embed)
                    }
                    else if (page == 4) {
                        embed.addFields(
                            { name: `:wolf: Pets`, value: `\`${petlist}\``}
                        )
                        embed.setFooter(`Page ${page} of 4.`);
                        msg.edit(embed)
                    }
                    msg.reactions.resolve('⏪').users.remove(hooman.id);
                })

                

                forwards.on('end', collected => {
                    msg.reactions.cache.get('⏩').remove()
                })
    
                stop.on('collect', (reaction, user) => {
                    backwards.stop()
                    forwards.stop()
                    stop.stop()
                    msg.reactions.removeAll()
                })
    
                stop.on('end', collected => {
                    msg.reactions.cache.get('🚫').remove()
                })
            })
        })
    }
}