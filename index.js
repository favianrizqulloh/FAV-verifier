'use strict'
require('dotenv').config()

const Discord = require('discord.js');

const client = new Discord.Client({disabledEvents:["RESUMED","GUILD_SYNC","GUILD_CREATE","GUILD_DELETE","GUILD_UPDATE","GUILD_MEMBER_ADD","GUILD_MEMBER_REMOVE","GUILD_MEMBER_UPDATE","GUILD_MEMBERS_CHUNK","GUILD_INTEGRATIONS_UPDATE","GUILD_ROLE_CREATE","GUILD_ROLE_DELETE","GUILD_ROLE_UPDATE","GUILD_BAN_ADD","GUILD_BAN_REMOVE","CHANNEL_CREATE","CHANNEL_DELETE","CHANNEL_UPDATE","CHANNEL_PINS_UPDATE","MESSAGE_DELETE","MESSAGE_UPDATE","MESSAGE_DELETE_BULK","MESSAGE_REACTION_ADD","MESSAGE_REACTION_REMOVE","MESSAGE_REACTION_REMOVE_ALL","USER_UPDATE","USER_NOTE_UPDATE","USER_SETTINGS_UPDATE","PRESENCE_UPDATE","VOICE_STATE_UPDATE","TYPING_START","VOICE_SERVER_UPDATE","RELATIONSHIP_ADD","RELATIONSHIP_REMOVE","WEBHOOKS_UPDATE"]});
client.once('ready', () => {
	console.log('FΛV verifier is ready!');
});

client.on('message', message => {
  if (message.content === 'agree' && message.channel.id === "574103717897568279") {
	  if (!message.channel.permissionFor(message.guild.me).serialize().SEND_MESSAGES) return console.error("The bot doesn't have the permission to send messages.")
	  if (!message.channel.permissionFor(message.guild.me).serialize().ADD_REACTIONS) {
		  console.error("The bot doesn't have the permission to add reactions.")
		  message.channel.send("The bot doesn't have the permission to add reactions.")
		  .then(m=>m.delete(20000))
		  return
}
	  if (!message.channel.permissionFor(message.guild.me).serialize().MANAGE_MESSAGES) {
		  console.error("The bot doesn't have the permission to delete messages.")
		  message.channel.send("The bot doesn't have the permission to delete messages.")
		  .then(m=>m.delete(20000))
		  return
}
    const messageRole = message.guild.roles.find(role => role.name === "Member")
    if (messageRole == null) return.
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
	  .then(()=>message.delete(5000))
	  .catch(error => {
	    console.error(error.stack)
    message.channel.send(error.stack)
	    .then(m=>m.delete(20000))
    })
}
});

client.login(process.env.BOT_TOKEN);
