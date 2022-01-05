const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jukebox')
		.setDescription('Help Frank work the jukebox.')
		.addSubcommand(subcommand =>
			subcommand
				.setName('play')
				.setDescription('Make the jukebox play a YouTube video.')
				.addStringOption(option =>
					option.setName('url')
						  .setDescription('YouTube video URL')
						  .setRequired(true)
				)
		),
	async execute(interaction) {
		// await interaction.reply('Pongus!');
		// const message = await interaction.fetchReply();
		// await interaction.editReply(`Pongus! ${message.createdTimestamp - interaction.createdTimestamp}ms delay`);
		if (!interaction.options.getString('url')) {
			await interaction.reply('Please specify a YouTube video URL.');
			return;
		}
		const url = interaction.options.getString('url');

		// YouTube downloader
		const ytdl = require('ytdl-core');

		const Discord = require('@discordjs/voice');

		const stream = ytdl(url, {filter: 'audioonly'});
		const resource = Discord.createAudioResource(stream);
		const player = Discord.createAudioPlayer();

		const channel = interaction.member.voice.channel;
		//TODO: errorcheck

		const connection = Discord.joinVoiceChannel({
			channelId: channel.id,
			guildId: interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator
		});
		
		player.play(resource);
		connection.subscribe(player);

		player.on(Discord.AudioPlayerStatus.Idle, () => {
			connection.destroy();
		});

		await interaction.reply(`Started playing ${url}`);
	}
};
