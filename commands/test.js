const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const XIVAPI = require('@xivapi/js')
const xiv = new XIVAPI({
    private_key: process.env.ffxiv,
    snake_case: true
  })

module.exports.run = async(client, msg, args) => {
    item = args.join(" ")
    msg.channel.send(item)
    let res = await xiv.search(item)
    console.log(res)
}