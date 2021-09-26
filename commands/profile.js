const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'profile',
    description: 'profile',
    aliases: ['p'],
	execute(message, args) {
        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()

        if (!args.length)
        {
            exampleEmbed.setColor('#0099ff')
            exampleEmbed.setTitle('Profile')
            exampleEmbed.setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png', dynamic: true}))
            exampleEmbed.setDescription('Something about your profile')
            exampleEmbed.setThumbnail(message.author.displayAvatarURL({format: 'png', dynamic: true}))
            exampleEmbed.addFields(
                { name: 'Account created', value: message.author.createdAt }
            )
            exampleEmbed.addField('Don\'t let your dreams be dreams', 'Yes', true)
            exampleEmbed.setImage(message.author.displayAvatarURL({format: 'png', dynamic: true}))
            exampleEmbed.setTimestamp()
            exampleEmbed.setFooter('You\'re beautiful <3', message.author.displayAvatarURL({format: 'png', dynamic: true}));
        }
        else
        {
            const user = message.mentions.users.first();

            if(!message.mentions.users.size)
            {
                return message.channel.send("Give a proper User");
            }
            else
            {
                exampleEmbed.setColor('#0099ff')
                exampleEmbed.setTitle('Profile')
                exampleEmbed.setAuthor(user.username, user.displayAvatarURL({format: 'png', dynamic: true}))
                exampleEmbed.setDescription('Something about your profile')
                exampleEmbed.setThumbnail(user.displayAvatarURL({format: 'png', dynamic: true}))
                exampleEmbed.addFields(
                    { name: 'Account created', value: user.createdAt }
                )
                exampleEmbed.addField('Don\'t let your dreams be dreams', 'Yes', true)
                exampleEmbed.setImage(user.displayAvatarURL({format: 'png', dynamic: true}))
                exampleEmbed.setTimestamp()
                exampleEmbed.setFooter('You\'re beautiful <3', user.displayAvatarURL({format: 'png', dynamic: true}));
            }
        }
            message.channel.send(exampleEmbed);
    },
};

