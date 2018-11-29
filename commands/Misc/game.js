let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle("**Our Community Games & Events**")
  .setDescription("**Hey Hello ! Welcome Our Community Our Games Are http://starve.io/ - https://www.scrible.com/ - https://www.lordz.io/ - https://moomoo.io/ - there more games ask Ban about them (The Leader and The Owner Of me)**")
  .setColor("0x#F8FC05")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  message.channel.sendEmbed(embed);
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "game"
}