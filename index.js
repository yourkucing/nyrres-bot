const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: false});
const prefix = "uwu ";
const fs = require('fs').promises;
const path = require('path');


client.commands = new Map();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('uwu help', { type: 'STREAMING' });
 });

client.on('message', msg => {
    if (msg.author.bot) return

        if (msg.content.toLowerCase() === 'hi nyrres') {
            if (msg.author.bot) return;
            else {
                msg.channel.send('hihi!');
            }
        }
    });

client.login(process.env.token1);