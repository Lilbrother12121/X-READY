let Discord = require('discord.js');

exports.run = (client, message) => {
	
  var embed = new Discord.RichEmbed()
  .setTitle("**iHaxBan Youtube Channel**")
  .setDescription("**Hi And Welcome Im xBot The Bot Of Ban Need An Awesome Role ? Just Subscribe To Him With This Link And Get @Subscriber role Its Easy Right ? https://www.youtube.com/channel/UC4nzXiKezdyEHgJaBYHrK6Q?view_as=subscriber** **You Can Also Learn How to Code A Bot Like Me By Watching Ban's Videos !**")
  .setColor("0x#DF0101")
  .setFooter("Have A Good Time With Testing And Using my Awesome Commands ! a Special Thanks From  Ban For Using Hes Bot ")
  message.channel.sendEmbed(embed);
  message.react('ðŸ‘');
	
}
module.exports.help = {
	name: "youtube",
	alias: [
	"yt",
	"YOUTUBE"
	]
}