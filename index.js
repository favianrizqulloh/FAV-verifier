const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('FΛV verifier is ready!');
});

client.on('message', message => {
  if (message.content === 'agree' && message.channel.id === "574103717897568279") {
    const messageRole = message.guild.roles.find(role => role.name === "Member")
    const messageRoleExists = message.guild.roles.exists(role => role.name === "Member")
    
    if(message.member.roles.has(messageRole.id)) return;
    message.react('✅')
    message.member.addRole(messageRole)
}
	console.log(message.content);
});

client.login(process.env.BOT_TOKEN);
