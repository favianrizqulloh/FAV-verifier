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
});

client.login(process.env.BOT_TOKEN);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
