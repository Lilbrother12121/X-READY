let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var member = message.mentions.members.first();
  if(!message.member.permissions.has('ADMINISTRATOR'))return message.reply('**You Cant Use This Command Because You Dont Have Permissions To Kick Members !**')
  member.kick();
  message.reply('**This Member Got Kicked By You For Breaking Rules... He Is gone ....** ``RIP``')
  message.react('ðŸ‘Œ');
	
}
module.exports.help = {
	name: "kick",
	alias: [
	"KICK",
	"kik",
	"KIK"
	]
}