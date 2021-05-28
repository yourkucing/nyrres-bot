const Discord = require('discord.js');

module.exports.run = async(client, msg, args) => {
    if(!args[0]) {
        return
    }
    else {
        dice = args[0].split("d")
        if (!args[1]) {
            if (dice[0] === "") {
                result = Math.floor(Math.random() * dice[1]) + 1
                msg.channel.send("```\nResult: " + result + "\nDetails: " + args[0] + " (" + result + ")\n```");
            }
            else if (parseInt(dice[0]) === 1) {
                result = Math.floor(Math.random() * dice[1]) + 1
                msg.channel.send("```\nResult: " + result + "\nDetails: " + args[0] + " (" + result + ")\n```");        
            }
            else if (parseInt(dice[0]) > 1) {
                n = 0
                L = []
                while (n < parseInt(dice[0])) {
                    result = Math.floor(Math.random() * dice[1]) + 1
                    L.push(result)
                    n = n + 1
                }
                total = L.reduce((a, b) => a + b)
                msg.channel.send("```\nResult: " + total + "\nDetails: " + args[0] + " (" + L + ")\n```");
            }
        }
        else {
            modifier = args[1].split("")
            if (modifier[0] == "+") {
                number = parseInt(modifier[1])
            }
            else if (modifier[0] == "-") {
                number = parseInt(-modifier[1])
            }
            else {
                return
            }
            if (dice[0] === "") {
                result = Math.floor(Math.random() * dice[1]) + 1
                final = result + number
                msg.channel.send("```\nResult: " + final + "\nDetails: " + args[0] + " (" + result + " " + args[1] + ")\n```");
            }
            else if (parseInt(dice[0]) === 1) {
                result = Math.floor(Math.random() * dice[1]) + 1
                msg.channel.send("```\nResult: " + result + "\nDetails: " + args[0] + " (" + result + " " + args[1] + ")\n```");        
            }
            else if (parseInt(dice[0]) > 1) {
                n = 0
                L = []
                while (n < parseInt(dice[0])) {
                    result = Math.floor(Math.random() * dice[1]) + 1
                    L.push(result)
                    n = n + 1
                }
                total = L.reduce((a, b) => a + b)
                msg.channel.send("```\nResult: " + total + "\nDetails: " + args[0] + " (" + L + " " + args[1] + ")\n```");
            }
        }
    }
}