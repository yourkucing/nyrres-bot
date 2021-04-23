const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Gnome`)
    .setDescription('A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.')
    .addFields(
    { name: 'Appearances', value: `A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome’s insatiable interest in everything around.
    \nA gnome’s personality is writ large in his or her appearance. A male gnome’s beard, in contrast to his wild hair, is kept carefully trimmed but often styled into curious forks or neat points. A gnome’s clothing, though usually made in modest earth tones, is elaborately decorated with embroidery, embossing, or gleaming jewels.`},
    { name: `Ability Score Increase`, value: `Your Intelligence score increases by 2.`},
    { name: `Age`, value: `Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.`},
    { name: `Alignment`, value: `Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.`},
    { name: `Size`, value: `Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.`},
    { name: `Speed`, value: `Your base walking speed is 25 feet.`},
    { name: `Darkvision`, value: `Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`},
    { name: `Gnome Cunning`, value: `You have advantage on all Intellect, Wisdom, and Charisma saving throws against magic.`},
    { name: `Languages`, value: `You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.`},
    { name: `Subrace: Deep Gnome`, value: `Deep gnomes are guarded & suspicious of outsiders. They are cunning but can be kind-hearted & loyal.\n\nAbility Score Increase: Dexterity score increases by 1.\nAge: Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years.\nAlignment: They believe that survival depends on avoiding entanglements with others and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others.\nSize: One stands about 3 to 3½ feet tall, weighs 80 to 120 pounds. Your size is Small.\nSuperior Darkvision: Your darkvision has a radius of 120 ft.\nStone Camouflage: You have an advantage on Dexterity checks to hide in rocky terrain.\nLanguages: You can speak, read, and write Common, Gnomish, and Undercommon. Their dialect is more guttural, and most know only a little bit of Common, but those who deal with outsiders pick up enough Common to get by in other lands.`},
    { name: `Subrace: Rock Gnome`, value: `As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes.
    \nAbility Score Increase: Your Constitution score increases by 1.\n\nArtificer’s Lore: Whenever you make an Intellect check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.\n\nTinker: You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time.`},
    { name: `Tinker for Rock Gnome`, value: `When you create a device, choose one of the following options:
    \n**Clockwork Toy:** This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.
    \n**Fire Starter:** The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.
    \n**Music Box:** When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.`},
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png`)
    .setFooter('More information: https://www.dndbeyond.com/races/gnome');
    msg.channel.send(embed);
}