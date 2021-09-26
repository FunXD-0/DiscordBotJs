module.exports = {
	name: 'leave',
	description: 'leaves the channel',
    aliases:['l'],
    cooldown: 5,
	async run(message, args) {
        if(!message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();    
        }
        else
        {
            message.channel.send("I must be in a voice channel");
        }
    }
};