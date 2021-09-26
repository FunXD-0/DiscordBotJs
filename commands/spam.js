module.exports = {
	name: 'spam',
	description: 'spam',
	cooldown: 5,
	execute(message, args) {
        for(var i = 0; i < 100; i++)
        {
            var interval = setInterval (function () {
                // use the message's channel (TextChannel) to send a new message
                message.channel.send("quack")
                .catch(console.error); // add error handling here
            }, 1 * 250); 
        }
	},
};