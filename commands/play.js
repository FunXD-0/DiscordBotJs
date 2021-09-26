const YTDL = require('ytdl-core');
module.exports = {
	name: 'play',
	description: 'play music',
    aliases:['p'],
    cooldown: 5,
	async run(message, args) {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection => {
                        message.channel.send("Im in :sunglasses:");
                    })
            }
        }
        else
        {
            message.reply("I wont play music to anyone but you <3");
        }
    }
};