const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const XIVAPI = require('@xivapi/js')
const xiv = new XIVAPI({
    private_key: process.env.ffxiv,
    snake_case: true
  })

module.exports.run = async(client, msg, args) => {
    msg.channel.send("hello")
    item = args.join(" ")
    let res = await xiv.search(item)
    msg.channel.send(res.Results[0].ID)
}