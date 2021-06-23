const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Basic Races`)
    .setDescription(`Choose your race wisely. (These are not the only races, you can add on your own if you want, but be sure to ask your DM first!
        \nYou can get more information about the races by going to: https://www.dndbeyond.com/races`)
    .addFields(
    { name: 'Dragonborn', value: `Dragonborn look very much like dragons standing erect in humanoid form, though the lack the wings or tail.\n\nRacial traits:\n +2 Strength, +1 Charisma, Draconic Ancestry, Breath Weapon, Damage Resistance`},
    { name: `Dwarf`, value: `Bold and hardy, dwarves are known as skilled warriors, miners and workers of stone and metal.\n\nRacial traits:\n+2 Constitution, Darkvision, Dwarven, Resilience, Dwarven Combat Training, Stonecunning`},
    { name: `Elf`, value: `Elves are magical people of otherworldly grace, living in the world but not entirely part of it.\n\nRacial traits:\n+2 Dexterity, Darkvision, Keen Senses, Fey Ancestry, Trance`},
    { name: `Gnome`, value: `A gnome's energy and enthusiasm for living shines through every inch of his or her tiny body.\n\nRacial traits:\n+2 Intellect, Darkvision, Gnome Cunning`},
    { name: `Half-elf`, value: `Half-elves combine what some say are the best qualities of their elf and human parents.\n\nRacial traits:\n+2 Charisma, +1 to two other ability scores, Darkvision, Fey Ancestry, Skill Versatility`},
    { name: `Halfling`, value: `The dimunitive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offence.\n\nRacial traits:\n+2 Dexterity, Lucky, Brave, Halfling Nimbleness`},
    { name: `Half-orc`, value: `Half-orcs' grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.\n\nRacial traits:\n+2 Strength, +1 Constitution, Darkvision, Menacing, Relentless Endurance, Savage Attacks`},
    { name: `Human`, value: `Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.\n\nRacial traits:\n+1 to all abilities, Extra Language`},
    { name: `Tiefling`, value: `To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.\n\nRacial traits:\n+2 Charisma, +1 Intellect, Darkvision, Hellish Resistance, Infernal Legacy`}
    );
    msg.channel.send(embed);
}