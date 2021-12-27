//							franks bot

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const { Client, Intents } = require('discord.js');
const token = process.env.TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'beep') {
		await interaction.reply('Boop!');
	} else if (commandName === 'pingus') {
		await interaction.reply('pongus');
	}
});

client.login(token);
