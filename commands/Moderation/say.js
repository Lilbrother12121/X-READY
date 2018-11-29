let Discord = require('discord.js');

exports.run = (client, message) => {
let say = message.content.split(' ').slice(1).join(' ');
if(!message.member.permissions.has('ADMINISTRATOR'))return message.reply('**You Cant Use This Command Because You Dont Have Permissions To use This Command !!!!!**');
  
  message.delete(1000); // deletes the content
  message.channel.send(say);
	
}
module.exports.help = {
	name: "say",
	alias: [
	"SAY",
	"sayd"
	]
}