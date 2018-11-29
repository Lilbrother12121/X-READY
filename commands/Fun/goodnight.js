let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle(":full_moon:")
  .setColor('RANDOM')
  message.channel.sendEmbed(embed);
  message.delete();
  message.reply("**Good Night Bro Have Sweet Dreams !** :smile:")
  message.react("âœ…");
	
}
module.exports.help = {
	name: "goodnight",
	alias: [
	"gn",
	"GOODNIGHT"
	]
}