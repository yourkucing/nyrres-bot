const moneyModel = require('../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    if (!msg.mentions.users.size) {
        msg.channel.send(`Who are you giving stuffs to?`)
        return
    }
    else {
        tagged = msg.mentions.members.first()
        taggedUser = await moneyModel.findOne({userID: tagged.id})
        mainUser = await moneyModel.findOne({userID: hooman})
        item = args.slice(1).join("")
        if (item.size == 0) {
            msg.channel.send(`How much are you giving? Please retry.`)
            return
        }
        else {
            num = parseInt(item.slice(0, -2))
            curr = item.slice(-2).toLowerCase()
            if (curr == "cp") {
                num = num
            }
            else if (curr == "sp") {
                num = num * 10
            }
            else if (curr == "ep") {
                num = num * 50
            }
            else if (curr == "gp") {
                num = num * 100
            }
            else if (curr == "pp") {
                num = num * 1000
            }
            else {
                tMoney = num + taggedUser.money.copper + 10 * taggedUser.money.silver + 50 * taggedUser.money.electrum + 100 * taggedUser.money.gold + 1000 * taggedUser.money.platinum
                mMoney = mainUser.money.copper + 10 * mainUser.money.silver + 50 * mainUser.money.electrum + 100 * mainUser.money.gold + 1000 * mainUser.money.platinum - num
                
                platinum = Math.floor(tMoney/1000)
                tMoney -= (platinum * 1000)
                gold = Math.floor(tMoney/100)
                tMoney -= (gold * 100)
                electrum = Math.floor(tMoney/50)
                tMoney -= (electrum * 50)
                silver = Math.floor(tMoney/10)
                copper = tMoney - (silver * 10)

                moneyModel.findOneAndUpdate({userID: tagged.id}, {
                    $set: {
                        money: {
                            copper: copper,
                            silver: silver,
                            electrum: electrum,
                            gold: gold,
                            platinum: platinum
                        }
                    }
                }).then(tUpdate => {
                    if (tUpdate) {
                        platinum = Math.floor(mMoney/1000)
                        mMoney -= (platinum * 1000)
                        gold = Math.floor(mMoney/100)
                        mMoney -= (gold * 100)
                        electrum = Math.floor(mMoney/50)
                        mMoney -= (electrum * 50)
                        silver = Math.floor(mMoney/10)
                        copper = mMoney - (silver * 10)

                        moneyModel.findOneAndUpdate({userID: hooman}, {
                            $set: {
                                money: {
                                    copper: copper,
                                    silver: silver,
                                    electrum: electrum,
                                    gold: gold,
                                    platinum: platinum
                                }
                            }
                        }).then(mUpdate => {
                            if (mUpdate) {
                                msg.channel.send(`Money has been transferred!`)
                            }
                        })
                    }
                })
            }
        }
    }
}