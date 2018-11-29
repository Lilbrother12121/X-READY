Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let prefix = process.env.token;
let token = ".";

client.on('ready', () => {
client.user.setActivity(`${client.guilds.size} SERVERS TYPE .HELP`, {type: 'WATCHING'});
console.log('IM READY !')
});

client.on('message', message => {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  cmd = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  
//command handler
let commandfile = client.commands.get(cmd);
  let alias = client.aliases.get(cmd);

  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
//end of handler
});
client.on('message', msg => {
  const swearWords = ["WTF", "bitch","fuck","FUCK","wtf","Fuck","fUck","fUCk","wtf","w t f","wt f","motherfucker","MOTHERFUCKERS","MOTHERFUCKER","MOTHERfUCKER","mOTHERfucker"];
  if( swearWords.some(word => msg.content.includes(word)) ) {
      msg.delete();
      msg.author.send('``Anti Bad Wors Blocked`` 🍂 **Stop what you are Posting this Action might have been Logged. Stop Saying Bad Words !**');
    }
});
client.login(token);

