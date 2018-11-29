let Discord = require('discord.js');

exports.run = (client, message) => {
let id = message.content.split(' ').slice(1,2).join(' ');
  let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(id);
  if (!dUser) return message.channel.send("**I Can't Find This User ! You Must Mention Them OR This User Isn't In This Server**")
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("**you cant Use This Command Because You Dont Have One From Those Roles Administrator\Owner\Moderator OR You Are Missing Administrator Permission**");
  let dMsg = message.content.split(' ').slice(2).join(' ');
  if(dMsg.length < 1) return message.reply('You must supply a message!')
  
  dUser.send(`${dUser} **This Is Moderator\Administrator\Owner**_${message.author}_**Sent You A Dm From Hes Server  Read It Carefully : ** >> ${dMsg}`)
  
  message.author.send(`${message.author} You Have Sent This Message <<${dMsg}>> To ${dUser}`)
  message.react('ðŸ‘Œ');
	
}
module.exports.help = {
	name: "send",
	alias: "SEND"
}