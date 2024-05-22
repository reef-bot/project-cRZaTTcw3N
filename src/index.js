const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config/config.json');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Bot is online!');
});

client.login(config.token);