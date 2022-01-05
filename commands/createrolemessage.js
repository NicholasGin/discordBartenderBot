const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createrolemessage')
		.setDescription('allow users to select a role')
		.addChannelOption(option => option.setName('channel').setDescription('Select a channel to create message in.'))
		.addStringOption(option => option.setName('message').setDescription('Message assigning roles')),
	async execute(interaction) {
		//interaction.message interaction.reply
		// await interaction.reply('Pongus!');
		// const message = await interaction.fetchReply();
		// await interaction.editReply(`Pongus! ${message.createdTimestamp - interaction.createdTimestamp}ms delay`);

		// TODO: get message you're listening to
		const message = null;

		// collect reactions
		const filter = (reaction, user) => {
			return reaction.emoji.name === '👍' && user.id === message.author.id;
		};
		
		const collector = message.createReactionCollector({ filter, time: 15000 });
		
		collector.on('collect', (reaction, user) => {
			console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
		});
		
		collector.on('end', collected => {
			console.log(`Collected ${collected.size} items`);
		});
	}
};
