const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('@discordjs/voice');
const ytdl = require('ytdl-core');

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
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName('pause')
				.setDescription('Make the jukebox pause whatever it\'s playing.')
		),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'play') {
			if (!interaction.options.getString('url')) {
				await interaction.reply('Please specify a YouTube video URL.');
				return;
			}
			const url = interaction.options.getString('url');
			const stream = ytdl(url, {filter: 'audioonly'});
			const resource = Discord.createAudioResource(stream);
			const player = Discord.createAudioPlayer();
	
			const channel = interaction.member.voice.channel;
			if (!channel) {
				await interaction.reply('You must be in a voice channel to play the jukebox.')
				return;
			}
	
			const connection = Discord.joinVoiceChannel({
				channelId: channel.id,
				guildId: interaction.guildId,
				adapterCreator: interaction.guild.voiceAdapterCreator
			});
			
			// Play jukebox
			player.play(resource);
			connection.subscribe(player);
	
			// Destroy when done
			player.on(Discord.AudioPlayerStatus.Idle, () => {
				connection.destroy();
			});
	
			await interaction.reply(`Started playing ${url} on the jukebox.`);
		} else if (interaction.options.getSubcommand() === 'pause') {
			const connection = Discord.getVoiceConnection(interaction.member.guild.id);
			if (connection) {
				connection.destroy();
				await interaction.reply(`Paused the jukebox.`);
			} else {
				await interaction.reply(`The jukebox wasn't playing anything.`);
			}
		}
	}
};
