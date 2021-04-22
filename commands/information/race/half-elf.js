const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Half-Elf`)
    .setDescription('Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.')
    .addFields(
    { name: 'Appearances', value: `To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par with both parents, though they’re neither as slender as elves nor as broad as humans. They range from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their elven ancestry. Half-elven coloration and features lie somewhere between their human and elf parents, and thus show a variety even more pronounced than that found among either race. They tend to have the eyes of their elven parents.`},
    { name: `Ability Score Increase`, value: `Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.`},
    { name: `Age`, value: `Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.`},
    { name: `Alignment`, value: `Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.`},
    { name: `Size`, value: `Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.`},
    { name: `Speed`, value: `Your base walking speed is 30 feet.`},
    { name: `Darkvision`, value: `Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.`},
    { name: `Fey Ancestry`, value: `You have advantage on saving throws against being charmed, and magic can’t put you to sleep.`},
    { name: `Skill Versatility`, value: `You gain proficiency in two skills of your choice.`},
    { name: `Languages`, value: `You can speak, read, and write Common, Elvish, and one extra language of your choice.`}
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png`)
    .setFooter('More information: https://www.dndbeyond.com/races/half-elf');
    msg.channel.send(embed);
}