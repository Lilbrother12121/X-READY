let Discord = require('discord.js');

exports.run = (client, message) => {
	
	const ownerID = '404950596043669545';
    if (message.author.id !== ownerID) return message.channel.send("You are not authorized to use this command.");

    var error17 = new Discord.RichEmbed().setColor('RANDOM')
        .setDescription('**Please enter a valid server ID.**')
        .setColor('RANDOM')

    var error18 = new Discord.RichEmbed().setColor("990033")
        .setDescription('**You cannot kick the bot from this server!**')
        .setColor(0xff0000)


    if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
        msg.delete(9000)
    });

    client.guilds.get(args[0]).leave();
    message.channel.send(`**Bot was been removed from server id [${args[0]}]**`)
	
}
module.exports.help = {
	name: "kickbot",
	alias: "KICKBOT"
}