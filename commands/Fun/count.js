let Discord = require('discord.js');

exports.run = (client, message) => {
	
  message.channel.send(`Server counted: **${client.guilds.size} **`)
  message.react("âœ…");
	
}
module.exports.help = {
	name: "count",
	alias: "COUNT"
}