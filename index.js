const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: false});
const prefix = "ny ";
const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');


client.commands = new Map();

mongoose.connect(process.env.MONGODB_SRV, {
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
                msg.channel.send(process.env.MONGODB_SRV);
            }
        }

    if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(new RegExp(/\s+/));
    const command = args.shift().toLowerCase();

    if(client.commands.get(command)) {
        client.commands.get(command).run(client, msg, args).catch((e) => { console.log(e); });
    }
});

(async function registerCommands(dir = 'commands') {
    let files = await fs.readdir(path.join(__dirname, dir));
    for(let file of files) {
        let stat = await fs.lstat(path.join(__dirname, dir, file));
        if(stat.isDirectory())
            registerCommands(path.join(dir, file));
        else {
            if(file.endsWith(".js")) {
                let cmdName = file.substring(0, file.indexOf(".js"));
                let cmdModule = require(path.join(__dirname, dir, file));
                client.commands.set(cmdName, cmdModule);
            }
        }
    }
})();

client.login(process.env.token1);