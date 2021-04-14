const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: false});
const prefix = "ny ";
const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');


client.commands = new Map();

mongoose.connect(process.env.mongodb_srv, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('Connected to the database!');
}).catch((err) => {
    console.log(err);
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('ny help', { type: 'STREAMING' });
 });

client.on('message', msg => {
    if (msg.author.bot) return

        if (msg.content.toLowerCase() === 'hi nyrres') {
            if (msg.author.bot) return;
            else {
                msg.channel.send(process.env.mongodb_srv);
            }
        }
    });

client.login(process.env.token1);