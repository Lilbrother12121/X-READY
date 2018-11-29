let Discord = require('discord.js');

exports.run = (client, message) => {
	
  let user = message.mentions.users.first() || message.author;

  var embed = new Discord.RichEmbed()
  .setAuthor(`${user.username}`)
  .setImage(user.displayAvatarURL)
  .setColor('RANDOM')
  message.react('ðŸ‘');

  message.channel.send(embed)
	
}
module.exports.help = {
	name: "avatar",
	alias: "AVATAR"
}