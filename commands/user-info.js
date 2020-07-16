module.exports = {
	name: 'user-info',
	description: 'Information about the user.',
	// args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		} else if (args[0] === 'delete') {
			return message.channel.send(`Booms!`)
		} else {
			return message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`)
		}
	},
};