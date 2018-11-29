let Discord = require('discord.js');

exports.run = (client, message) => {
	
  message.delete();
  message.reply("Pong! (hold on, processing latency...)").then(m => m.edit(`${message.author}:ping_pong: Pong!  (Current latency is ${m.createdTimestamp - message.createdTimestamp}ms, while the API Latency is ${Math.round(client.ping)}ms)`) );
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "ping",
	alias: [
	"p",
	"PING"
	]
}