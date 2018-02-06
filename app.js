//We are going to require discord.js
const Discord = require('discord.js');
const client = new Discord.Client(); //The bot Client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`); //This will send a message to your console!
})

//Our first command!
client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content === 'ping') {
    msg.channel.send('ping');
  }
});


client.login('Your Bot Token Here');//Token will be reset after this video!
