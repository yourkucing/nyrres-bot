const profileModel = require('../../models/profileSchema');
const storeModel = require('../../models/storeSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    let guild = msg.guild.id
    const words = args.join(' ')
    stuffs = words.split(',')
    stuffs[0] = stuffs[0].trim()
    stuffs[1] = stuffs[1].trim()
    msg.channel.send(`Greetings, ${msg.guild.members.cache.get(msg.author.id).displayName}. Please key in the price of the item in the format cp, sp, ep, gp, pp (eg. 2, 3, 15, 7, 0): ("exit" to exit.)`);
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
                    item: stuffs[0],
                    category: stuffs[1],
                    price: {
                        copper: money[0].trim(),
                        silver: money[1].trim(),
                        electrum: money[2].trim(),
                        gold: money[3].trim(),
                        platinum: money[4].trim()
                    }
                });
                msg.channel.send(`**${stuffs[0]}** added successfully!`)
            } catch (err) {
                console.log(err)
            }

        }
    })
}