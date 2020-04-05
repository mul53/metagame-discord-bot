require('dotenv').config();
const DiscordClient = require('./lib/discordClient');

const client = new DiscordClient(process.env.BOT_TOKEN); 

client.onReady(() => {
    console.log(`Logged in ${client.client.user.username}`);
});

client.addChannelListener('quest-completions', msg => {
    console.log(msg);
});
