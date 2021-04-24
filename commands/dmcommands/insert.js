const profileModel = require('../../models/profileSchema');
const inventoryModel = require('../../models/inventorySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    let guild = msg.guild.id
    stuffs = args.split(',')
    stuffs[0] = stuffs[0].trim()
    stuffs[1] = stuffs[1].trim()

    profileData = await profileModel.findOne({userID: hooman})
    let inventory;
        try {
            inventory = inventoryModel.create({
                userID: hooman,
                serverID: guild,
                characterName: profileData.characterName,
                item: stuffs[0],
                category: stuffs[1]
            });
            msg.channel.send(`Added!`)
        } catch (err) {
            console.log(err)
        }
}