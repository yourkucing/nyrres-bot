const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Elf`)
    .setDescription('Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.')
    .addFields(
    { name: 'Appearances', value: `With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females.
    \nElves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry.`},
    { name: `Ability Score Increase`, value: `Your Dexterity score increases by 2.`},
    { name: `Age`, value: `Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.`},
    { name: `Alignment`, value: `Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.`},
    { name: `Size`, value: `Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.`},
    { name: `Speed`, value: `Your base walking speed is 30 feet.`},
    { name: `Darkvision`, value: `Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`},
    { name: `Keen Senses`, value: `You have proficiency in the Wisdom skill.`},
    { name: `Fey Ancestry`, value: `You have advantage on saving throws against being charmed, and magic can’t put you to sleep.`},
    { name: `Trance`, value: `Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.`},
    { name: `Languages`, value: `You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.`},
    { name: `Subrace: Eladrin`, value: `Creatures of magic with strong ties to nature, eladrin live in the twilight realm of the Feywild. Their cities sometimes cross over to the Material Plane, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.
    \n\nAbility Score Increase: Your Intelligence score increases by 1.\nElf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.\nFey Step: You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest.`},
    { name: `Subrace: High Elf`, value: `As a high elf, you have a keen mind and a mastery of at least the basics of magic. There are two types: Sun elves and moon elves.
    \nThe sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.
    \n\nAbility Score Increase: Your Intellect score increases by 1.\nElf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.\nCantrip: You know one cantrip of your choice from the wizard spell list. Intellect is your spellcasting ability for it.\nExtra Language: You can speak, read, and write one extra language of your choice.`},
    { name: `Subrace: Wood Elf`, value: `As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. In Faerûn, wood elves are reclusive and distrusting of non-elves.
    \nWood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.
    \n\nAbility Score Increase: Your Wisdom score increases by 1.\nElf Weapon Training: You have proficiency with the longsword, shortsword, shortbow, and longbow.\nFleet of Foot: Your base walking speed increases to 35 feet.\nMask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.`}
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png`)
    .setFooter('More information: https://www.dndbeyond.com/races/elf');
    msg.channel.send(embed);
}