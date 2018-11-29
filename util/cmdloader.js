const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.informationCommands = new Discord.Collection();
    client.miscCommands = new Discord.Collection();
    client.moderationCommands = new Discord.Collection();
    client.ownerCommands = new Discord.Collection();
    client.funCommands = new Discord.Collection();

const infoFiles = await readdir("./commands/Information/");
const miscFiles = await readdir("./commands/Misc/");
const modFiles = await readdir("./commands/Moderation/");
const onrFiles = await readdir("./commands/Owner/");
const funFiles = await readdir("./commands/Fun/");


funFiles.forEach(f => {
        if (!f.endsWith(".js")) return;
        let fun = require(`../commands/Fun/${f}`);
        client.funCommands.set(fun.help.name, fun);
        client.commands.set(fun.help.name, fun);
        client.aliases.set(fun.help.alias, fun);
        });
infoFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let info = require(`../commands/Information/${f}`);
    client.informationCommands.set(info.help.name, info);
    client.commands.set(info.help.name, info);
	client.aliases.set(info.help.alias, info);
	});
miscFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let misc = require(`../commands/Misc/${f}`);
    client.miscCommands.set(misc.help.name, misc);
    client.commands.set(misc.help.name, misc);
	client.aliases.set(misc.help.alias, misc);
	});
modFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let mod = require(`../commands/Moderation/${f}`);
    client.moderationCommands.set(mod.help.name, mod);
    client.commands.set(mod.help.name, mod);
	client.aliases.set(mod.help.alias, mod);
	});
onrFiles.forEach(f => {
    if(!f.endsWith(".js"))return;
		let onr = require(`../commands/Owner/${f}`);
    client.ownerCommands.set(onr.help.name, onr);
    client.commands.set(onr.help.name, onr);
	client.aliases.set(onr.help.alias, onr);
	});
console.log(`loaded ${client.commands.size} commands`);
console.log(`loaded ${client.aliases.size} aliases`);
}