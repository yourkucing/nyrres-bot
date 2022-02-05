const { Client, Intents, MessageEmbed, Permissions } = require('discord.js');
const XIVAPI = require('@xivapi/js')
const fetch = require('node-fetch');
const xiv = new XIVAPI({
    private_key: process.env.ffxiv,
    snake_case: true
  })

module.exports.run = async(client, msg, args) => {
    item = args.join(" ")
    let res = await xiv.search(item)
    fetch(`https://xivapi.com${res.results[0].url}`, { mode: 'cors' })
	.then(response => response.json())
	.then(data => {
        const embed = new MessageEmbed()
        .setColor('#FF69B4')
        .setTitle(`**Results for ${item}:**`)
        .setDescription(`Found: ${res.pagination.results_total} results`)
        .setThumbnail(`https://xivapi.com${res.results[0].icon}`)
        .addFields(
            { name: `${data.Name_en}`, value: `**Description:** ${data.Description_en}\nhttps://xivapi.com${res.results[0].url}`}
        )
        .setFooter(`Page ${res.pagination.page} of ${res.pagination.page_total}`);
        msg.channel.send({embeds: [embed]});
    })
}