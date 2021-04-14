const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: false});
const prefix = "ny ";
const fs = require('fs').promises;
const path = require('path');
const mongoose = require('mongoose');


client.commands = new Map();

// mongoose.connect(process.env.MONGODB_SRV, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// }).then(()=>{
//     console.log('Connected to the database!');
// }).catch((err) => {
//     console.log(err);
// });

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}!`);
//     client.user.setActivity('ny help', { type: 'STREAMING' });
//  });

//  client.on('message', msg => {
//     var message = msg.content.toLowerCase()

//     if (msg.author.bot) return
//     if (message.includes('hi nyrres')) {
//         msg.channel.send('Greetings ' + msg.author.toString() +'! I hope you\'re having a lovely day!');
//     }
    
//     if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) return;
//     const args = msg.content.slice(prefix.length).split(new RegExp(/\s+/));
//     const command = args.shift().toLowerCase();
    
//     // -----------------------------------------------------------------------------------------------------------------------------------------------------
    
//      if(client.commands.get(command)) {
//          client.commands.get(command).run(client, msg, args).catch((e) => { console.log(e); });
//      }
    
//     //-----------------------------------------------------------------------------------------------------------------------------------------
    
     
//      if (msg.content === '@nyrres help' || command === 'help' || command === 'command' || command === 'commands') {
//             const embed = new Discord.MessageEmbed()
//             .setColor('#FF69B4')
//             .setTitle(`Commands`)
//             .setDescription('Thank you for using Nyrres bot!')
//             .addFields(
//             { name: 'Commands should be here.'
//             })
//             .setFooter(`Created by Maryam#9206`);
//             msg.author.send(embed);
//             msg.channel.send(`Let's move this to your DMs, **${msg.guild.members.cache.get(msg.author.id).displayName}**, shall we?`)
//      }
     
//      });
     
//      (async function registerCommands(dir = 'commands') {
//          let files = await fs.readdir(path.join(__dirname, dir));
//          for(let file of files) {
//              let stat = await fs.lstat(path.join(__dirname, dir, file));
//              if(stat.isDirectory())
//                  registerCommands(path.join(dir, file));
//              else {
//                  if(file.endsWith(".js")) {
//                      let cmdName = file.substring(0, file.indexOf(".js"));
//                      let cmdModule = require(path.join(__dirname, dir, file));
//                      console.log(cmdName);
//                      console.log(cmdModule);
//                      client.commands.set(cmdName, cmdModule);
//                  }
//              }
//          }
//      })();
    
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('uwu help', { type: 'STREAMING' });
    });
    
   client.on('guildMemberAdd', member => {
       const guild = member.guild;
       if (guild.id === "714366752489865276") { 
           client.channels.cache.get("714366752489865279").send(`Hey **${member.displayName}**, welcome to **World of Zodiac**!\n\nPlease head yourself to <#714370031709978665> to sort yourself into a certain house that you want to be in! And then don't forget to head yourself to <#714370627871440956> as well! After that, you can go to <#714370677632794695> to introduce yourself, and have conversations with all people in this server on <#714367141620744244> ! Just don't forget to read the rules in <#714372663841259572> though! It's necessary! :wink:\n\nHave fun, Stars! We hope you enjoy being in this server! :sparkles:`);
           member.roles.add(member.guild.roles.cache.find(x => x.id == "714374597914656810"), "");
       }
       if (guild.id === "733541632275644427") {
           client.channels.cache.get("733541632275644430").send(`Hihi **${member.displayName}**, welcome to Carcosa and World of Eldritch County!\n\nPlease head yourself to <#733542476035653643> to introduce yourself so that others can get to know you better! And then don't forget to head yourself to <#733551174250266729> as well! \n\nI hope you have fun and I'm really glad that you're in Carcosa :heart: <:meow:733551416114937856>`);
           member.roles.add(member.guild.roles.cache.find(x => x.id == "733542068563083285"), "");
       }
   })
   
   
   client.on('message', msg => {
       
   
       
   if (msg.author.bot) return
   
    if (msg.content.toLowerCase() === 'òwó') {
        if (msg.author.bot) return;
        else {
            msg.channel.send('buzz buzz');
        }
    }
    
    if (msg.content.toLowerCase().includes('eboy, who built you?')) {
    msg.channel.send('hi ' + msg.author.toString() +' uwu! Maryam#9206 built me. If you have any questions, complaints or suggestions, you can DM her :heart:');
    }
       
    if (msg.content.toLowerCase().includes('eboy, how do i submit a suggestion or feedback?')) {
    msg.channel.send('hi ' + msg.author.toString() +', you can submit your suggestion or feedback here: https://forms.gle/GpoHX32kVQznvY3h6 though dont forget to leave down your name and a way to contact you, just in case there are questions we need to specify!');
    }
    
    if (msg.content.toLowerCase() === 'uwu') {
        if (msg.author.bot) return;
        else {
            msg.channel.send('OwO');
        }
    }
    
    if (msg.content.toLowerCase() === 'owo') {
        if (msg.author.bot) return;
        else {
            msg.channel.send('AwA');
        }
    }
    
    if (msg.content.toLowerCase() === 'awa') {
        if (msg.author.bot) return;
        else {
            msg.channel.send('UwU');
        }
    }
    
   var message = msg.content.toLowerCase()
   
    if (message.includes('hi eboy uwu')) {
    msg.channel.send('hi ' + msg.author.toString() +' uwu!');
    }
       
    if (message.includes('eboy, i love you') || message.includes('eboy i love you')) {
    msg.channel.send('I love you too, ' + msg.author.toString() +' uwu! :heart:');
    }
    
    if (message.includes('can i get a yee claw')) {
    msg.channel.send('yee claw!');
    }
    
    if (message.includes('goodmorning')) {
            if (msg.author.bot) return;
            else {
               msg.channel.send(`Goodmorning uwu! Have a great day!`);
            }
    }
    
    if (message.includes('goodnight')) {
            if (msg.author.bot) return;
            else {
               msg.channel.send(`Goodnight uwu! Sleep well!`);
            }
    }
    
    if (msg.content.toLowerCase().includes('eboy, help me out here')) {
       if (!msg.mentions.users.size) {
           return msg.channel.send(`Who needs it, ${msg.author}? You gotta give me a name.`);
       }
       else {
           const taggedUser = msg.mentions.members.first();
           msg.channel.send(`hey ${ taggedUser }, ${msg.guild.members.cache.get(msg.author.id).displayName} loves you a whole lot so you'd better not forget that.`);
       }
    }
   
   if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) return;
   const args = msg.content.slice(prefix.length).split(new RegExp(/\s+/));
   const command = args.shift().toLowerCase();
   
    if (command === 'uwu') {
       const words = args.join(' ');
       msg.channel.send(words.replace(/r/g,'w').replace(/s/g,'sh').replace(/l/g,'w').replace(/R/g,'W').replace(/S/g,'Sh').replace(/L/g,'W') + ' uwu');
   }
   
   // -----------------------------------------------------------------------------------------------------------------------------------------------------
   
    if(client.commands.get(command)) {
        client.commands.get(command).run(client, msg, args).catch((e) => { console.log(e); });
    }
   
   //-----------------------------------------------------------------------------------------------------------------------------------------
    
   if (command === 'search') {
       var definition = args.join(' ');;
       
       ud.term(definition).then((result) => {
           const entries = result.entries
           const embed = new Discord.MessageEmbed()
           .setColor('#FF69B4')
           .setTitle(entries[0].word)
           .setDescription(entries[0].definition)
           .addFields(
           { name: 'Example:', value: entries[0].example }
           );
           msg.channel.send(embed);
       }).catch((error) => {
         msg.channel.send('Definition not found.');
       })
   }
   
    
    if (msg.content === '@eboy help' || command === 'help' || command === 'command' || command === 'commands') {
           const embed = new Discord.MessageEmbed()
           .setColor('#FF69B4')
           .setTitle(`Commands`)
           .setDescription('Thank you for using Eboy bot uwu! (∩•̀ω•́)⊃-⋆')
           .addFields(
           { name: 'main commands', value: 'uwu\r\nowo\r\nawa\r\nòwó\r\nhi eboy uwu\r\neboy, i love you\r\ncan i get a yee claw\r\nuwu uwu <words to uwuify>\r\nuwu search <word to search>\r\nuwu sortinghat\r\nuwu duel @<username>\r\nuwu banner <words to turn into banner>\r\nuwu f / uwu f <words> / uwu f @<username>' },
           { name: 'information about eboy (type in the following)', value: 'eboy, how do I submit a suggestion or feedback?\r\neboy, who built you?' },
           { name: 'uwu <commands> @<username>', value: 'bite\r\nboop\r\ncling\r\nconsole\r\ndefenestrate\r\ndelete\r\ndrag\r\nhate\r\nhug\r\nkick\r\nkill\r\nkiss\r\nlove\r\npatpat\r\npaypal\r\npeck (aka peck on the cheeks)\r\npunch\r\nscold\r\nshake\r\nshoot\r\nslap\r\nsnuggle\r\nstab\r\nsummon\r\ntackle\r\ntonk\r\nuntonk\r\nyeet' },
           { name: 'uwu <commands>', value: 'angry\r\axe\r\ncelly\r\ncheer\r\nclap\r\nconfused\r\ncry\r\ndance\r\ndie\r\ndrink\r\neat\r\new\r\nflop\r\nhide\r\nhydrate\r\njitter\r\nlaugh\r\npoof\r\nscared\r\nscream\r\nsleep\r\nspazz\r\ntantrum\r\nwork\r\nyoink' },
           { name: 'uwu <commands> @<username> ONLY ALLOWED IN NSFW CHANNELS (also there are gay stuffs, so if youre not comfortable with it, dont use it.)', value: 'choke\r\nfuck\r\nsmooch (aka french kiss/steamy kiss)' },
           { name: 'special commands', value: 'to cheer someone up and tell them that you love them:\r\n"eboy, help me out here @<username>"\r\nto kick someone out of the server: uwu byebye @<username>\r\nto matchmake someone: uwu match @<username> @<username> BOTH MUST BE DIFFERENT USERS.\r\nto roll dice: eg. uwu dice 2d6 (2d6 = 2 d6 dice)\r\nuwu choose [choice1, choice2, ....]' },
           )
           .setFooter(`Created by Maryam#9206`);
           msg.author.send(embed);
           msg.channel.send(`Psssst. Check your DMs, **${msg.guild.members.cache.get(msg.author.id).displayName}**! :wink:`)
    }
    
    });
    
    (async function registerCommands(dir = 'commands') {
        let files = await fs.readdir(path.join(__dirname, dir));
        console.log(files);
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