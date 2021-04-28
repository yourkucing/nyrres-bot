const profileModel = require('../models/profileSchema');
const moneyModel = require('../models/moneySchema');
const inventoryModel = require('../models/inventorySchema');
const storeModel = require('../models/storeSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author
    let guild = msg.guild.id
    words = args.join(" ").replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    words = words.trim()
    storeData = await storeModel.findOne({item: words})
    moneyData = await moneyModel.findOne({userID: hooman.id})

    if (!moneyData) {
        msg.channel.send(`Oh, ${hooman}, it appears you do not have a character yet. You can create one using the command: \`ny create\``)
    }
    else {
        if (!storeData) {
            msg.channel.send(`Oh, we don't sell such an item!`)
        }
        else {
            money = ''
            if (storeData.price.copper != 0) {
                money += `${storeData.price.copper} CP `
            }
            if (storeData.price.silver != 0) {
                money += `${storeData.price.silver} SP `
            }
            if (storeData.price.electrum != 0) {
                money += `${storeData.price.electrum} EP `
            }
            if (storeData.price.gold != 0) {
                money += `${storeData.price.gold} GP `
            }
            if (storeData.price.platinum != 0) {
                money += `${storeData.price.platinum} PP `
            }
            msg.channel.send(`You're buying **${storeData.item}**? That would be a total of **${money}**.`)

            try {
                mytotal = moneyData.money.copper + 10 * moneyData.money.silver + 50 * moneyData.money.electrum + 100 * moneyData.money.gold + 1000 * moneyData.money.platinum
                total = storeData.price.copper + 10 * storeData.price.silver + 50 * storeData.price.electrum + 100 * storeData.price.gold + 1000 * storeData.price.platinum

                if (total > mytotal) {
                    msg.channel.send(`Sorry, but it seems like you do not have enough money to buy this.`)
                }
                else {
                    mytotal = mytotal - total
                    platinum = Math.floor(mytotal/1000)
                    mytotal -= (platinum * 1000)
                    gold = Math.floor(mytotal/100)
                    mytotal -= (gold * 100)
                    electrum = Math.floor(mytotal/50)
                    mytotal -= (electrum * 50)
                    silver = Math.floor(mytotal/10)
                    copper = mytotal - (silver * 10)
                    newmoney = await moneyModel.findOneAndUpdate({userID: hooman.id}, {
                                    $set: {
                                        money: {
                                            copper: copper,
                                            silver: silver,
                                            electrum: electrum,
                                            gold: gold,
                                            platinum: platinum
                                        }
                                    }
                                })

                    inventory = inventoryModel.create({
                        userID: hooman.id,
                        serverID: guild,
                        characterName: moneyData.characterName,
                        item: storeData.item,
                        category: storeData.category
                    })
                    msg.channel.send(`\`${money}has been deducted from ${moneyData.characterName}.\``)
                }
            } catch(err) {
                console.log(err)
            }
            
            msg.channel.send(`Thank you for your patronage. Do drop by again!`)
        }
    }
}