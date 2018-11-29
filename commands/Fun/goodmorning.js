let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle(":sun_with_face: ")
  .setColor('RANDOM')
  message.channel.sendEmbed(embed);
  message.delete();
  message.reply("**Good Morning!** :smile:")
  message.react("âœ…");
	
}
module.exports.help = {
	name: "goodmorning",
	alias: [
	"gm",
	"GOODMORNING"
	]
}