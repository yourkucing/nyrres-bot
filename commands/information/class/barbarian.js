const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    hooman = msg.author
    let page = 1;
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setTitle(`Barbarian`)
    .setDescription('People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one’s own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature—keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.\n\nBarbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise.')
    .addFields(
    { name: 'Creating a Barbarian', value: `When creating a barbarian character, think about where your character comes from and his or her place in the world. Did you come from a distant land, making you a stranger in the area of the campaign? Or is the campaign set in a rough-and-tumble frontier where barbarians are common?
    \nWhat led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war, brought in chains to “civilized” lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you committed, a taboo you violated, or a coup that removed you from a position of authority.`},
    { name: `Hit Points`, value: `**Hit Dice:** 1d12 per barbarian level
    **Hit Points at 1st Level:** 12 + your Constitution modifier
    **Hit Points at Higher Levels:** 1d12 (or 7) + your Constitution modifier per barbarian level after 1st`},
    { name: `Proficiencies`, value: `**Armor:** Light armor, medium armor, shields
    **Weapons:** Simple weapons, martial weapons
    **Tools:** None
    **Saving Throws:** Strength, Constitution
    **Skills:** Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival`},
    { name: `Equipment`, value: `You start with the following equipment, in addition to the equipment granted by your background:
    1. (a) a greataxe or (b) any martial melee weapon
    2. a) two handaxes or (b) any simple weapon
    3. An explorer’s pack and four javelins`},
    { name: `Rage`, value: `On your turn, you can rage as a bonus action.
    \nWhile raging, you gain these benefits if you aren’t wearing heavy armor:
    1. You have advantage on Strength checks & Strength saving throws.
    2. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian.
    3. You have resistance to bludgeoning, piercing, & slashing damage.
    4. If you are able to cast spells, you can’t cast them or concentrate on them while raging.
    
    Your rage lasts for 1 min. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level, you must finish a long rest before you can rage again.`},
    { name: `Unarmored Defense`, value: `While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.`},
    { name: `Reckless Attack`, value: `Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.`},
    { name: `Danger Sense`, value: `At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.

    You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.`},
    { name: `Primal Path`, value: `At 3rd level, you choose a path that shapes the nature of your rage. The Path of the Berserker is detailed at the end of the class description, and additional primal paths are available in other sources. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.`},
    { name: `Ability Score Improvement`, value: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`}
    )
    .setThumbnail(`https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png`)
    .setImage(`https://i.ibb.co/fr87VK7/Screenshot-2021-04-23-at-9-49-47-PM.png`)
    .setImage(`https://i.ibb.co/sy2frvH/Screenshot-2021-04-23-at-9-50-55-PM.png`)
    .setFooter(`Page ${page} of 2. More information: https://www.dndbeyond.com/classes/barbarian`);
    msg.channel.send(embed).then(msg => {

        msg.react('⏪').then( r => {
            msg.react('⏩')
            msg.react('🚫')

            const backwardsFilter = (reaction, user) => {
                return reaction.emoji.name === '⏪' && !user.bot;
            };
            const forwardsFilter = (reaction, user) => {
                return reaction.emoji.name === '⏩' && !user.bot;
            };
            const stopFilter = (reaction, user) => {
                return reaction.emoji.name === '🚫' && !user.bot;
            }
            //3600000

            const backwards = msg.createReactionCollector(backwardsFilter, { time: 3600000 });
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 3600000 });
            const stop = msg.createReactionCollector(stopFilter, { time: 3600000 });

            backwards.on('collect', (reaction, user) => {
                if (page === 1) return;
                page--;
                embed.fields = []
                embed.addFields(
                    { name: 'Creating a Barbarian', value: `When creating a barbarian character, think about where your character comes from and his or her place in the world. Did you come from a distant land, making you a stranger in the area of the campaign? Or is the campaign set in a rough-and-tumble frontier where barbarians are common?
                    \nWhat led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war, brought in chains to “civilized” lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you committed, a taboo you violated, or a coup that removed you from a position of authority.`},
                    { name: `Hit Points`, value: `**Hit Dice:** 1d12 per barbarian level
                    **Hit Points at 1st Level:** 12 + your Constitution modifier
                    **Hit Points at Higher Levels:** 1d12 (or 7) + your Constitution modifier per barbarian level after 1st`},
                    { name: `Proficiencies`, value: `**Armor:** Light armor, medium armor, shields
                    **Weapons:** Simple weapons, martial weapons
                    **Tools:** None
                    **Saving Throws:** Strength, Constitution
                    **Skills:** Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival`},
                    { name: `Equipment`, value: `You start with the following equipment, in addition to the equipment granted by your background:
                    1. (a) a greataxe or (b) any martial melee weapon
                    2. a) two handaxes or (b) any simple weapon
                    3. An explorer’s pack and four javelins`},
                    { name: `Rage`, value: `On your turn, you can rage as a bonus action.
                    \nWhile raging, you gain these benefits if you aren’t wearing heavy armor:
                    1. You have advantage on Strength checks & Strength saving throws.
                    2. When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian.
                    3. You have resistance to bludgeoning, piercing, & slashing damage.
                    4. If you are able to cast spells, you can’t cast them or concentrate on them while raging.
                    
                    Your rage lasts for 1 min. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level, you must finish a long rest before you can rage again.`},
                    { name: `Unarmored Defense`, value: `While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.`},
                    { name: `Reckless Attack`, value: `Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.`},
                    { name: `Danger Sense`, value: `At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.

                    You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.`},
                    { name: `Primal Path`, value: `At 3rd level, you choose a path that shapes the nature of your rage. The Path of the Berserker is detailed at the end of the class description, and additional primal paths are available in other sources. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels.`},
                    { name: `Ability Score Improvement`, value: `When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.`}
                    )
                    embed.setFooter(`Page ${page} of 2. More information: https://www.dndbeyond.com/classes/barbarian`);
                    msg.edit(embed)
                    msg.reactions.resolve('⏪').users.remove(hooman.id);
            })

            backwards.on('end', collected => {
                msg.reactions.cache.get('⏪').remove()
            })
            
            forwards.on('collect', (reaction, user) => {
                if (page === 2) return;
                page++;
                embed.fields = []
                embed.addFields(
                    { name: `Extra Attack`, value: `Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.`},
                    { name: `Fast Movement`, value: `Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor.`},
                    { name: `Feral Instinct`, value: `By 7th level, your instincts are so honed that you have advantage on initiative rolls.

                    Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.`},
                    { name: `Brutal Critical`, value: `Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.

                    This increases to two additional dice at 13th level and three additional dice at 17th level.`},
                    { name: `Relentless Rage`, value: `Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.

                    Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.`},
                    { name: `Brutal Critical`, value: `At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.

                    This increases to three additional dice at 17th level.`},
                    { name: `Persistent Rage`, value: `Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.`},
                    { name: `Brutal Critical`, value: `At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.`},
                    { name: `Indomitable Might`, value: `Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.`},
                    { name: `Primal Champion`, value: `At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.`},
                    { name: `Path of the Berserker Part 1`, value: `For some barbarians, rage is a means to an end—that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker’s rage, you thrill in the chaos of battle, heedless of your own health or well-being.

                    **Frenzy**
                    Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.
                    
                    **Mindless Rage**
                    Beginning at 6th level, you can’t be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage`},
                    { name: `Path of the Berserker Part 2`, value: `**Intimidating Presence**
                    Beginning at 10th level, you can use an action to frighten someone with your menacing presence and choose a creature that you can see within 30 feet of you. If the creature can see/hear you, it must succeed on a Wisdom saving throw (DC = 8 + Proficiency + Charisma) or be frightened of you until the end of your next turn. On next turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.
                    If the creature succeeds on its saving throw, you can’t use this feature on that creature again for 24 hrs.
                    
                    **Retaliation**
                    Starting at 14th level, when you take damage from a creature that is within 5 ft of you, you can use your reaction to make a melee weapon attack against that creature.`})
                embed.setFooter(`Page ${page} of 2. More information: https://www.dndbeyond.com/classes/barbarian`);
                msg.edit(embed)
                msg.reactions.resolve('⏩').users.remove(hooman.id);
            })

            forwards.on('end', collected => {
                msg.reactions.cache.get('⏩').remove()
            })

            stop.on('collect', (reaction, user) => {
                backwards.stop()
                forwards.stop()
                stop.stop()
                msg.reactions.removeAll()
            })

            stop.on('end', collected => {
                msg.reactions.cache.get('🚫').remove()
            })
            
        })
    })
}