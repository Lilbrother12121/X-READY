let Discord = require('discord.js');

exports.run = (client, message) => {
	
  if (message.author.id === "404950596043669545") {
    message.channel.send(":gear: ``---------`` **Reloading Bot's Process** ``---------`` :gear:")
    
    client.destroy()
    client.login(process.env.token)
  message.channel.send(":gear: ``---------``**Reload has been done**``---------`` :gear:")
  } else {
    
  message.channel.send("``---------`` **Only the Owner of The bot can do that !** ``---------``")
  message.react('âš™');
}
	
}
module.exports.help = {
	name: "reboot",
	alias: "REBOOT"
}