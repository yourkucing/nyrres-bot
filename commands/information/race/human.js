const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Human`)
    .setDescription('In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.')
    .addFields(
    { name: 'Appearances', value: `With their penchant for migration and conquest, humans are more physically diverse than other common races. There is no typical human. An individual can stand from 5 feet to a little over 6 feet tall and weigh from 125 to 250 pounds. Human skin shades range from nearly black to very pale, and hair colors from black to blond (curly, kinky, or straight); males might sport facial hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc, or other lineages. Humans reach adulthood in their late teens and rarely live even a single century.`},
    { name: `Ability Score Increase`, value: ` Your ability scores each increase by 1.`},
    { name: `Age`, value: `Humans reach adulthood in their late teens and live less than a century.`},
    { name: `Alignment`, value: `Humans tend toward no particular alignment. The best and the worst are found among them.`},
    { name: `Size`, value: `Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.`},
    { name: `Speed`, value: `Your base walking speed is 30 feet.`},
    { name: `Languages`, value: `You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.`},
    { name: `Ethnicities`, value: `**Calishite:** Shorter and slighter in build than most other humans, Calishites have dusky brown skin, hair, and eyes. They’re found primarily in southwest Faerûn.
    \n\n**Chondathan:** Chondathans are slender, tawny-skinned folk with brown hair that ranges from almost blond to almost black. Most are tall and have green or brown eyes, but these traits are hardly universal. Humans of Chondathan descent dominate the central lands of Faerûn, around the Inner Sea.
    \n\n**Damaran:** Found primarily in the northwest of Faerûn, Damarans are of moderate height and build, with skin hues ranging from tawny to fair. Their hair is usually brown or black, and their eye color varies widely, though brown is most common.
    \n\n**Illuskan:** Illuskans are tall, fair-skinned folk with blue or steely gray eyes. Most have raven-black hair, but those who inhabit the extreme northwest have blond, red, or light brown hair.
    \n\n**Mulan:** Dominant in the eastern and southeastern shores of the Inner Sea, the Mulan are generally tall, slim, and amber-skinned, with eyes of hazel or brown. Their hair ranges from black to dark brown, but in the lands where the Mulan are most prominent, nobles and many other Mulan shave off all their hair.
    \n\n**Rashemi:** Most often found east of the Inner Sea and often intermingled with the Mulan, Rashemis tend to be short, stout, and muscular. They usually have dusky skin, dark eyes, and thick black hair.
    \n\n**Shou:** The Shou are the most numerous and powerful ethnic group in Kara-Tur, far to the east of Faerûn. They are yellowish-bronze in hue, with black hair and dark eyes. Shou surnames are usually presented before the given name.
    \n\n**Tethyrian:** Widespread along the entire Sword Coast at the western edge of Faerûn, Tethyrians are of medium build and height, with dusky skin that tends to grow fairer the farther north they dwell. Their hair and eye color varies widely, but brown hair and blue eyes are the most common.
    \n\n**Turami:** Native to the southern shore of the Inner Sea, the Turami people are generally tall and muscular, with dark mahogany skin, curly black hair, and dark eyes.`},
    { name: `Subrace: Stout Halfling`, value: `As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.
    \n\nAbility Score Increase: Your Constitution score increases by 1.\n\nStout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.`}
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png`)
    .setFooter('More information: https://www.dndbeyond.com/races/human');
    msg.channel.send(embed);
}