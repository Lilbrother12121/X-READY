let Discord = require('discord.js');

exports.run = (client, message) => {
let cmd = message.content.split(' ').slice(1, 2).join(' ');
	
	
if(!cmd){
  let memberToFind = message.mentions.members.first();

  if (!memberToFind) {
    return message.channel.send('**You Must Mention A User First To Use This Command*****Expample :*** ``whois @User``');
  }

  var embed = new Discord.RichEmbed()
  .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL)
  .addField('Account Created', memberToFind.user.createdAt, true)
  .addField('Joined This Server', message.guild.members.get(memberToFind.id).joinedAt, true)
  .addField('User ID', memberToFind.id, true)
  .setColor('RANDOM')
  message.channel.send(embed);
  message.react("âœ…");
}	
if(cmd === ('server'||'sv')){
  let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
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
	
}
module.exports.help = {
	name: "info",
	alias: "i"
}