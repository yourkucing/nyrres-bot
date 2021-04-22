const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Tiefling`)
    .setDescription('To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.')
    .addFields(
    { name: 'Appearances', value: `Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors—black, red, white, silver, or gold—with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple.`},
    { name: `Ability Score Increase`, value: `Your Intelligence score increases by 1, and your Charisma score increases by 2.`},
    { name: `Age`, value: `Tieflings mature at the same rate as humans but live a few years longer.`},
    { name: `Alignment`, value: `Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.`},
    { name: `Size`, value: `Tieflings are about the same size and build as humans. Your size is Medium.`},
    { name: `Speed`, value: `Your base walking speed is 30 feet.`},
    { name: `Darkvision`, value: `Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`},
    { name: `Hellish Resistance`, value: `You have resistance to fire damage.`},
    { name: `Infernal Legacy`, value: `You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.`},
    { name: `Languages`, value: `You can speak, read, and write Common and Infernal.`}
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png`)
    .setFooter('More information: https://www.dndbeyond.com/races/tiefling');
    msg.channel.send(embed);
}