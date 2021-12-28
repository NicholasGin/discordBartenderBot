const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mozaert')
		.setDescription('Mozaert play something please.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('url')
				.setDescription('YouTube video URL')),
	async execute(interaction) {
		// await interaction.reply('Pongus!');
		// const message = await interaction.fetchReply();
		// await interaction.editReply(`Pongus! ${message.createdTimestamp - interaction.createdTimestamp}ms delay`);
		
		if (interaction.options.getSubcommand() !== 'url') await interaction.reply('Please specify a YouTube video URL.');
		// const url = interaction.options.get

		// youtube downloader
		const ytdl = require('ytdl-core');
	}
};
