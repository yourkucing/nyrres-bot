const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Dwarf`)
    .setDescription('Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.')
    .addFields(
    { name: 'Appearances', value: `Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk.
    \nDwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully.`},
    { name: `Ability Score Increase`, value: `Your Constitution score increases by 2.`},
    { name: `Age`, value: `Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.`},
    { name: `Alignment`, value: `Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.`},
    { name: `Size`, value: `Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.`},
    { name: `Speed`, value: `Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.`},
    { name: `Darkvision`, value: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`},
    { name: `Dwarven Resilience`, value: `You have advantage on saving throws against poison, and you have resistance against poison damage.`},
    { name: `Dwarven Combat Training`, value: `You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.`},
    { name: `Tool Proficiency`, value: `You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.`},
    { name: `Stonecunning`, value: `Whenever you make an Intellect check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.`},
    { name: `Languages`, value: `You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.`},
    { name: `Subrace: Hill Dwarf`, value: `As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.
    \n\nAbility Score Increase: Your Wisdom score increases by 1.\n\nDwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.`},
    { name: `Subrace: Mountain Dwarf`, value: `As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.
    \n\nAbility Score Increase: Your Strength score increases by 2.\n\nDwarven Armor Training: You have proficiency with light and medium armor.`}
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png`)
    .setFooter('More information: https://www.dndbeyond.com/races/dwarf');
    msg.channel.send(embed);
}