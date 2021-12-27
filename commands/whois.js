const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whois')
		.setDescription('Look up info about a user.')
		.addUserOption(option => option.setName('target').setDescription('The user')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		
		if (user) {
			const guildMember = await interaction.guild.members.fetch(user.id);
			await interaction.reply(`Name: ${guildMember.displayName} (${user.tag})\nID: ${user.id}`);
		} else {
			await interaction.reply(`Your Name: ${interaction.member.displayName} (${interaction.user.tag}) \nYour ID: ${interaction.user.id}`);
		}
	}
};
