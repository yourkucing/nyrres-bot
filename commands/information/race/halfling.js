const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Halfling`)
    .setDescription('The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.')
    .addFields(
    { name: 'Appearances', value: `The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds.
    \nHalflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors.
    \nHalfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little patience for dithering.`},
    { name: `Ability Score Increase`, value: `Your Dexterity score increases by 2.`},
    { name: `Age`, value: `A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.`},
    { name: `Alignment`, value: `Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.`},
    { name: `Size`, value: `Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.`},
    { name: `Speed`, value: `Your base walking speed is 25 feet.`},
    { name: `Lucky`, value: `When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.`},
    { name: `Brave`, value: `You have advantage on saving throws against being frightened.`},
    { name: `Halfling Nimbleness`, value: `You can move through the space of any creature that is of a size larger than yours.`},
    { name: `Languages`, value: `You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.`},
    { name: `Subrace: Lightfoot Halfling`, value: `As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety.\nLightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.
    \n\nAbility Score Increase: Your Charisma score increases by 1.\n\nNaturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.`},
    { name: `Subrace: Stout Halfling`, value: `As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.
    \n\nAbility Score Increase: Your Constitution score increases by 1.\n\nStout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.`}
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png`)
    .setFooter('More information: https://www.dndbeyond.com/races/halfling');
    msg.channel.send(embed);
}