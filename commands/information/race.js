const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Race Information`)
    .setDescription('You can see the information about different races here.')
    .addFields(
    { name: 'Dragonborn', value: `**Details:** Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.
    \n\n**Appearances:** Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand.
    \nThe blood of a particular type of dragon runs very strong through some dragonborn clans. These dragonborn often boast scales that more closely match those of their dragon ancestor—bright red, green, blue, or white, lustrous black, or gleaming metallic gold, silver, brass, copper, or bronze.
    \n\n**Traits:**\nAbility Score Increase: Your Strength score increases by 2, and your Charisma score increases by 1.
    \nAge: Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.
    \nAlignment: Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.
    \nSize: Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.
    \nSpeed: Your base walking speed is 30 feet.
    \nDraconic Ancestry: You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.
    \n
    ┌────────┬─────────────┬──────────────────────────────┐
    │ Dragon │ Damage Type │        Breath Weapon         │
    ├────────┼─────────────┼──────────────────────────────┤
    │ Black  │ Acid        │ 5 by 30 ft. line (Dex. save) │
    │ Blue   │ Lightning   │ 5 by 30 ft. line (Dex. save) │
    │ Brass  │ Fire        │ 5 by 30 ft. line (Dex. save) │
    │ Bronze │ Lightning   │ 5 by 30 ft. line (Dex. save) │
    │ Copper │ Acid        │ 5 by 30 ft. line (Dex. save) │
    │ Gold   │ Fire        │ 15 ft. cone (Dex. save)      │
    │ Green  │ Poison      │ 15 ft. cone (Con. save)      │
    │ Red    │ Fire        │ 15 ft. cone (Dex. save)      │
    │ Silver │ Cold        │ 15 ft. cone (Con. save)      │
    │ White  │ Cold        │ 15 ft. cone (Con. save)      │
    └────────┴─────────────┴──────────────────────────────┘
    
    \nBreath Weapon: You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.
    \nDamage Resistance: You have resistance to the damage type associated with your draconic ancestry.
    \nLanguages: You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.`},
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png`);
    msg.channel.send(embed);
}