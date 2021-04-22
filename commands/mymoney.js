const profileModel = require('../models/profileSchema');
const moneyModel = require('../models/moneySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    profileData = await profileModel.findOne({userID: hooman})
    moneyData = await moneyModel.findOne({userID: hooman})
    if (!profileData) {
        msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
    }
    else if (!moneyData) {
        msg.channel.send(`Oh, you do not have a wallet! Let me create one for you...`)
        money = 0
        if (profileData.class.toLowerCase() == 'barbarian') {
            n = 0
            L = []
            while (n < 2) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'bard') {
            n = 0
            L = []
            while (n < 5) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'cleric') {
            n = 0
            L = []
            while (n < 5) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'druid') {
            n = 0
            L = []
            while (n < 2) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'fighter') {
            n = 0
            L = []
            while (n < 5) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'monk') {
            n = 0
            L = []
            while (n < 5) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b)
        }
        else if (profileData.class.toLowerCase() == 'paladin') {
            n = 0
            L = []
            while (n < 5) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'ranger') {
            n = 0
            L = []
            while (n < 5) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'rogue') {
            n = 0
            L = []
            while (n < 4) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'sorcerer') {
            n = 0
            L = []
            while (n < 3) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'warlock') {
            n = 0
            L = []
            while (n < 4) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        else if (profileData.class.toLowerCase() == 'wizard') {
            n = 0
            L = []
            while (n < 4) {
                result = Math.floor(Math.random() * 4) + 1
                L.push(result)
                n = n + 1
            }
            money = L.reduce((a, b) => a + b) * 10
        }
        let wallet;
        try {
            wallet = moneyModel.create({
                userID: profileData.userID,
                serverID: profileData.guildID,
                characterName: profileData.characterName,
                money: {
                    gold: money
                }
            });
            msg.channel.send(`What class are you? Oh! A ${profileData.class}? How fascinating. Oh! Here you go, your wallet is all set up. Have a nice day!`)
        } catch (err) {
            console.log(err)
        }

        moneyData = await moneyModel.findOne({userID: hooman})

        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`**${msg.guild.members.cache.get(hooman).displayName}'s** Money`)
		.setDescription('You can see your money here.')
		.addFields(
		{ name: `Name: ${moneyData.characterName}`, value: `Copper: ${moneyData.money.copper} cp\nSilver: ${moneyData.money.silver} sp\nElectrum: ${moneyData.money.electrum} ep\nGold: ${moneyData.money.gold} gp\nPlatinum: ${moneyData.money.platinum} pp`}
		)
        .setThumbnail(`${url}`);
		msg.channel.send(embed);
    }
    else {
        url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
        const embed = new Discord.MessageEmbed()
		.setColor('#FF69B4')
		.setTitle(`**${msg.guild.members.cache.get(hooman).displayName}'s** Money`)
		.setDescription('You can see your money here.')
		.addFields(
		{ name: `Name: ${moneyData.characterName}`, value: `Copper: ${moneyData.money.copper} cp\nSilver: ${moneyData.money.silver} sp\nElectrum: ${moneyData.money.electrum} ep\nGold: ${moneyData.money.gold} gp\nPlatinum: ${moneyData.money.platinum} pp`}
		)
        .setThumbnail(`${url}`);
		msg.channel.send(embed);
    }
}