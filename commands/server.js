module.exports = {
	name: 'server',
	description: 'Information about the server.',
	// args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		} else if (args[0] === 'info') {
			return message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated on: ${message.guild.createdAt} in ${message.guild.region}`)
		} else {
			return message.channel.send(`type !server info to display all information.`)
		}
	},
};