const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "-"

// Text Replys
// Commands
bot.on("message", function(message)
{
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase())
    {
        case "ping":
            message.channel.sendMessage("pong");
            break;
        case "nuni":
            message.channel.sendMessage("Omae wa mou");
            break;
        case "roll":
            var result = Math.floor((Math.random() * 6) + 1);
            message.channel.sendMessage("You rolled a " + result);
            break;
        case "flip":
            var result = Math.floor((Math.random() * 2) + 1);
                if (result == 1) 
                    {
    	                message.channel.sendMessage("The coin landed on heads");
                    }
                    else if (result == 2) 
                    {
                     message.channel.sendMessage("The coin landed on tails");
                    }
            break;
        default:
            message.channel.sendMessage("Oof, someone doesn't know all my commands.");
            break;
    }
});

bot.login('NDczNTQzMzY5MTkzMTYwNzM1.DkEBMA.8XYBfdByLk3ESRvqFgq75u6KlnI');