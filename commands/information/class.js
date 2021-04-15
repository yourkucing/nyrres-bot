const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Basic Classes`)
    .setDescription(`Choose your class wisely. (These are not the only classes, you can add on your own if you want, but be sure to ask your DM first!
        \nYou can get more information about the classes by doing command **ny <class>**. Unfortunately, for now there is none cos I am tired n.n`)
    .addFields(
    { name: 'Barbarian', value: `A fierce warrior of primitive background who can enter a battle rage.\n\nHit die: d12\nPrimary Ability: Strength\nSaves: Strength & Constitution`},
    { name: `Bard`, value: `An inspiring magician whose power echoes the music of creation.\n\nHit die: d8\nPrimary Ability: Charisma\nSaves: Dexterity & Charisma`},
    { name: `Cleric`, value: `A priestly champion who wields divine magic in service of a higher power.\n\nHit die: d8\nPrimary Ability: Wisdom\nSaves: Wisdom & Charisma`},
    { name: `Druid`, value: `A priest of the Old Faith, wielding the powers of nature and adopting animal forms.\n\nHit die: d9\nPrimary Ability: Wisdom\nSaves: Intellect & Wisdom`},
    { name: `Fighter`, value: `A master of martial combat, skilled with a variety of weapons and armor.\n\nHit die: d10\nPrimary Ability: Strength or Dexterity\nSaves: Strength & Constitution`},
    { name: `Monk`, value: `A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.\n\nHit die: d8\nPrimary Ability: Dexterity & Wisdom\nSaves: Strength & Dexterity`},
    { name: `Paladin`, value: `A holy warrior bound to a sacred oath.\n\nHit die: d10\nPrimary Ability: Strength & Charisma\nSaves: Wisdom & Charisma`},
    { name: `Ranger`, value: `A warrior who combats threats on the edges of civilization.\n\nHit die: d10\nPrimary Ability: Dexterity & Wisdom\nSaves: Strength & Dexterity`},
    { name: `Rogue`, value: `A scoundrel who uses stealth and trickery to overcome obstacles and enemies.\n\nHit die: d8\nPrimary Ability: Dexterity\nSaves: Dexterity & Intellect`},
    { name: `Sorcerer`, value: `A spellcaster who draws on inherent magic from a gift or bloodline.\n\nHit die: d6\nPrimary Ability: Charisma\nSaves: Constitution & Charisma`},
    { name: `Warlock`, value: `A wielder of magic that is derived from a bargain with an extraplanar entity.\n\nHit die: d8\nPrimary Ability: Charisma\nSaves: Wisdom & Charisma`},
    { name: `Wizard`, value: `A scholarly magic-user capable of manipulating the structures of reality.\n\nHit die: d6\nPrimary Ability: Intellect\nSaves: Intellect & Wisdom`}
    );
    msg.channel.send(embed);
}