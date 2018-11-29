let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let embed = new Discord.RichEmbed()
  .setTimestamp()
  .setTitle("Direct Message To You")
  .addField(`Sent By:`,`<@${msg.author.id}>`)
  .setColor("RANDOM")
  .setThumbnail(msg.author.displayAvatarURL)
  .addField(`Message: `,msg.content)
  .setFooter(`DM Bot Messages | DM Logs`)
 
  client.users.get("404950596043669545").send(embed)

	
}
module.exports.help = {
	name: "test",
	alias: "TEST"
}