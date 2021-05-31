const profileModel = require('../models/profileSchema');
const spellModel = require('../models/spellSchema');
const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    let hooman = msg.author.id
    words = args.join(" ")
    if (!words){
        profileData = await profileModel.findOne({userID: hooman})
        if (!profileData) {
            msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
        }
        else {
            spells = await spellModel.find({userID: hooman, type: 'spell'})
            cantrips = await spellModel.find({userID: hooman, type: 'cantrip'})
            slots = await spellModel.find({userID: hooman, type: 'slot'})
    
            spelllist = ''
            cantriplist = ''
            slotlist = ''
    
            if (spells.length == 0) {
                spelllist = 'No spells'
            }
            else {
                for (x in spells) {
                    spelllist += spells[x].spell + '\n'
                }
            }
            if (cantrips.length == 0) {
                cantriplist = 'No cantrips'
            }
            else {
                for (x in cantrips) {
                    cantriplist += cantrips[x].spell + '\n'
                }
            }
            if (slots.length == 0) {
                slotlist = 'No slots'
            }
            else {
                for (x in slots) {
                    x = parseInt(x)
                    slotlist += (x+1) + `. ` + slots[x].spell + '\n'
                }
            }
    
            url = `https://cdn.discordapp.com/avatars/${hooman}/${msg.author.avatar}.png`
            const embed = new Discord.MessageEmbed()
            .setColor('#FF69B4')
            .setTitle(`**${profileData.characterName}'s** Spellbook`)
            .setDescription('You can see your spells here.')
            .addFields(
            { name: `:sparkles: Cantrips`, value: `\`${cantriplist}\``, inline: true},
            { name: `:boom: Spells`, value: `\`${spelllist}\``, inline: true},
            { name: `:white_square_button: Slots`, value: `\`${slotlist}\``, inline: false}
            )
            .setThumbnail(`${url}`);
            msg.channel.send(embed);
        }    
    }
    else {
        profileData = await profileModel.findOne({userID: hooman})
        if (!profileData) {
            msg.channel.send(`Sorry ${msg.author}, you don't have a character! You can create one using **ny create**.`)
        }
        else {
            msg.channel.send(`Please key in the spell type: ("exit" to exit.)`);
            msg.channel.awaitMessages(m => m.author.id == msg.author.id, {max: 1}).then(collected => {
                if (collected.first().content.toLowerCase() == 'exit') {
                    msg.channel.send("Goodbye for now!");
                }
                else {
                    type = collected.first().content.toLowerCase()
                    let spellbook = spellModel.create({
                        userID: hooman,
                        characterName: profileData.characterName,
                        spell: words,
                        type: type
                    });
                    msg.channel.send(`Spell saved!`)
                }
            })
        }
    }

    
}