const Discord = require('discord.js');
const Config = require('./config.json');
const CommandParser = require('./commands/command-parser'); 

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ipssi day starts !');
});

client.on('message', message => {
    CommandParser.identifyMessage(message)
});

client.login(Config.token);