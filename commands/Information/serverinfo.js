let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let embed = new Discord.RichEmbed()
  .setColor("0x#F605DA")
  .setTitle('**Server Info**')
  .addField("Id", message.guild.id)
  .addField("Owner", message.guild.owner)
  .addField("Owner Id", message.guild.ownerID)
  .addField("Roles", message.guild.roles.size)
  .addField("Region", message.guild.region)
.setThumbnail(message.guild.iconURL)
message.channel.send(embed)
message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "serverfo",
	alias: "SERVERINFO"
}