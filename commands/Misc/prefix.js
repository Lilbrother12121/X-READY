let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle("**xBot Prefix**")
  .setDescription("**My Prefix Is . \ In Some Commands i Don't Have A Prefix You Just Need To Type My Command ! **")
  .setColor("0x#08088A")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  message.channel.sendEmbed(embed);
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "prefix",
	alias: [
	"PREFIX"
	]
}