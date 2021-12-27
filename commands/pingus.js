const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pingus')
		.setDescription('Get Frank\'s ping delay.'),
	async execute(interaction) {
		await interaction.reply('Pongus!');
		const message = await interaction.fetchReply();
		await interaction.editReply(`Pongus! ${message.createdTimestamp - interaction.createdTimestamp}ms delay`);
	}
};
