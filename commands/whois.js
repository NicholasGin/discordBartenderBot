const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whois')
		.setDescription('Look up info about a user.')
		.addUserOption(option => option.setName('target').setDescription('The user')),
	async execute(interaction) {
		let user = interaction.options.getUser('target');
		let guildMember;
		if (user) {
			guildMember = await interaction.guild.members.fetch(user.id);
		} else {
			guildMember = interaction.member;
			user = interaction.user;
		}

		const myEmbed = new MessageEmbed()
			// TODO: Implement server colors and use it here
			// .setColor()
			.setTitle(`${guildMember.displayName}`)
			.setDescription(`Profile: <@${user.id}>`)
			.setThumbnail(user.avatarURL())
			.addFields(
				{ name: 'Tag', value: `${user.tag}`, inline: false },
				// TODO: Implement level system and system nickname
				// Original: 'Server level'
				// { name: 'Braincells lost', value: `0`, inline: true },

				// Blank field
				// { name: '\u200B', value: '\u200B' },

				// TODO: Implement commands called system and system nickname
				// Original: 'Commands called'
				// { name: 'Drinks ordered', value: `0`, inline: true }
			)
			.setTimestamp()
			// .setFooter({text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.avatarURL()});

		await interaction.reply({ embeds: [myEmbed] });
	}
};
