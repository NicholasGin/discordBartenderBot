module.exports = {
    name: 'messageReactionAdd',
    async execute(reaction, user) {
		return;
		/*
		// message, args, Discord, client
		console.log('I am running');
		console.log(reaction.partial)
		if (reaction.partial) {
			// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
			try {
				await reaction.fetch();
			} catch (error) {
				console.error('Something went wrong when fetching the message:', error);
				// Return as `reaction.message.author` may be undefined/null
				return;
			}
		}

		console.log('still here');


		return;
        const channel = '928176303243415553';
        const yellowRole = message.guild.roles.cache.find(role => role.name === "yellow");
        const redRole = message.guild.roles.cache.find(role => role.name === "red");

        const yellowEmoji = '🍌';
        const redEmoji = '🧧';
        
        let embed = new Discord.MessageEmbed()
            .setColor('#2C4AB0')
            .setTitle('Chooooz role')
            .setDescription('colours\n\n'
                + `${yellowEmoji} yellow \n`
                + `${redEmoji} red`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowEmoji);
        messageEmbed.react(redEmoji);

		*/
    }
}
