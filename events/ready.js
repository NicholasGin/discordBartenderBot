module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setUsername('Bartender Frank');
		// client.user.setAvatar('https://images.unsplash.com/photo-1629427788200-21efd8e87afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJhcnRlbmRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60');
		client.user.setPresence({ activities: [{ name: 'Master Chef', type: 'COMPETING' }], status: 'online' });
	}
};
