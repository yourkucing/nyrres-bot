const profileModel = require('../../models/profileSchema');
const storeModel = require('../../models/storeSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    let guild = msg.guild.id

    msg.channel.send(`Greetings, ${msg.guild.members.cache.get(msg.author.id).displayName}. Please key in the name of the item: ("exit" to exit.)`);
    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
        if (collected.first().content.toLowerCase() == 'exit') {
            msg.channel.send("Goodbye for now!");
        }
        else {
            itemname = collected.first().content.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            msg.channel.send(`Please key in a short description of the item: ("exit" to exit.)`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!");
                }
                else {
                    description = collected.first().content;
                    description = description[0].toUpperCase() + description.substring(1);
                    msg.channel.send(`Please key in the category of the item [weapon, equipment, consumable, mount, pet]: ("exit" to exit.)`);
                    msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                        if (collected.first().content.toLowerCase() == 'exit') {
                            msg.channel.send("Goodbye for now!");
                        }
                        else {
                            category = collected.first().content.toLowerCase();
                            if (category != 'weapon' && category != 'equipment' && category != 'consumable' && category != 'mount' && category != 'pet') {
                                msg.channel.send(`Sorry, this category does not exist. Please restart to insert new items into Tayo's Store.`);
                            }
                            else {
                                msg.channel.send(`Please key in the price of the item in the format cp, sp, ep, gp, pp (eg. 2, 3, 15, 7, 0): ("exit" to exit.)`);
                                msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                                    if (collected.first().content.toLowerCase() == 'exit') {
                                        msg.channel.send("Goodbye for now!");
                                    }
                                    else {
                                        money = collected.first().content;
                                        money = money.split(',')
                                        let inventory;
                                        try {
                                            inventory = storeModel.create({
                                                item: itemname,
                                                description: description,
                                                category: category,
                                                price: {
                                                    copper: money[0].trim(),
                                                    silver: money[1].trim(),
                                                    electrum: money[2].trim(),
                                                    gold: money[3].trim(),
                                                    platinum: money[4].trim()
                                                }
                                            });
                                            msg.channel.send(`**${itemname}** added successfully!`)
                                        } catch (err) {
                                            console.log(err)
                                        }

                                    }
                                })
                            }
                        }
                    })
                }
            })
        }
    })
}