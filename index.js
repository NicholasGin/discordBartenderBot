//							franks bot

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);