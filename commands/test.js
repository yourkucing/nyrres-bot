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
    const embed = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`**Results for ${item}:**`)
    .setDescription(`Found: ${res.pagination.results_total}`)
    .setThumbnail(res.results.icon)
    .addFields(
        { name: res.results.name, value: res.results.url}
    )
    .setFooter(`Page ${res.pagination.page} of ${res.pagination.page_total}`);
    msg.channel.send({embeds: [embed]});
}