const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('FΛV verifier is ready!');
});

client.on('message', message => {
  if (message.content === 'agree' && message.channel.id === "574103717897568279") {
    const messageRole = message.guild.roles.find(role => role.name === "Member")
    if (messageRole == null) return
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
	    message.channel.send("The bot doesn't have the permission required to assign roles.")
	    .then(m=>m.delete(20000))
	    return
    }
    if (message.guild.me.highestRole.comparePositionTo(messageRole)<1) {
	    message.channel.send("The position of this role is higher than the bot's highest role,it cannot be assigned by the bot.")
	    .then(m=>m.delete(20000))
	    return
    }
    if (messageRole.managed == true) {
	    message.channel.send("This is a auto managed role,it cannot be assigned.")
	    .then(m=>m.delete(20000))
	    return
    }
    if(message.member.roles.has(messageRole.id)) return;
    message.react('✅')
    message.member.addRole(messageRole)
	  .catch(error => {
	    console.error(error.stack)
    message.channel.send(error.stack)
	    .then(m=>m.delete(20000))
    })
}
});

client.login(process.env.BOT_TOKEN);
