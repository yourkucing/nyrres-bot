const profileModel = require('../../models/profileSchema');
const inventoryModel = require('../../models/inventorySchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    let guild = msg.guild.id
    const words = args.join(' ')
    stuffs = words.split(',')

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