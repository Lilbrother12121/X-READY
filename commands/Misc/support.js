let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle("**Need Support ?**")
  .setDescription("**You Can Join The Support Server https://discord.gg/93WKw7M Or You Can Only say help to see all my commands**")
  .setColor("RANDOM")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  message.channel.sendEmbed(embed);
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "support",
	alias:"s"
}