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
    useFindAndModify: false,
    useCreateIndex: true
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
    let profileData;
    try {
        profileData = profileModel.findOne({ userID: msg.author.id})
        if(!profileData){
            msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using __ny profileCreate__!`)
        }
    } catch (err){
        console.log(err);
    }

    var message = msg.content.toLowerCase()

    if (msg.author.bot) return
    if (message.includes('hi nyrres')) {
        msg.channel.send('Greetings ' + msg.author.toString() +'! I hope you\'re having a lovely day!');
    }
    
    if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) return;
    let args = msg.content.slice(prefix.length).split(new RegExp(/\s+/));
    let command = args.shift();
    
    // -----------------------------------------------------------------------------------------------------------------------------------------------------
    
     if(client.commands.get(command)) {
         client.commands.get(command).run(client, msg, profileData).catch((e) => { console.log(e); });
     }
    
    //-----------------------------------------------------------------------------------------------------------------------------------------
    
     
     if (msg.content === '@nyrres help' || command === 'help' || command === 'command' || command === 'commands') {
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setTitle(`Commands`)
            .setDescription('Thank you for using Nyrres bot!')
            .addFields(
            { name: 'Commands should be here.'
            })
            .setFooter(`Created by Maryam#9206`);
            msg.author.send(embed);
            msg.channel.send(`Let's move this to your DMs, **${msg.guild.members.cache.get(msg.author.id).displayName}**, shall we?`)
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