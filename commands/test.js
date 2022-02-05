const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const XIVAPI = require('@xivapi/js')
const xiv = new XIVAPI({
    private_key: process.env.ffxiv,
    snake_case: true
  })

module.exports.run = async(client, msg, args) => {
    item = args.join(" ")
    let res = await xiv.search(item)
    const embed = new MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`**Results for ${item}:**`)
    .setDescription(`Found: ${res.pagination.results_total}`)
    .setThumbnail(res.results[0].icon)
    .addFields(
        { name: `${res.results[0].name}`, value: `${res.results[0].url}`}
    )
    .setFooter(`Page ${res.pagination.page} of ${res.pagination.page_total}`);
    msg.channel.send({embeds: [embed]});
}