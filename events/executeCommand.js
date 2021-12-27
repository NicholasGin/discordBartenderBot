module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (!interaction.isCommand()) return;

		// Output to console
		console.log(`${interaction.user.tag} in [${interaction.guild.name}]#${interaction.channel.name} triggered an interaction.`);

		// Get command
		const command = interaction.client.commands.get(interaction.commandName);

		// Check error
		if (!command) return;

		// Execute command
		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
};
