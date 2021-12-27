const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingus')
		.setDescription('Replies with Pongus!'),
	async execute(interaction) {
		await interaction.reply('Pongus!');
	}
};
