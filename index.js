const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.user.presence.status);
  client.user.setActivity("e!help");
});
client.on('message', (message) => {
    console.log(message.content)
    if (message.content === 'ereh') {
        message.channel.send('que queres wachin')
    }
    if (message.content === 'e!help') {
        const embed = new MessageEmbed()
            .setTitle('Comandos')
            .setColor('RED')
            .addField('Comandos en proceso...', 'hoola')
            message.channel.send(embed);


    }
});
client.login(process.env.token);
