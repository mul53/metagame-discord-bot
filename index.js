require('dotenv').config();
const DiscordClient = require('./lib/discordClient');

const client = new DiscordClient(process.env.BOT_TOKEN); 

client.onReady(() => {
    console.log(`Logged in ${client.client.user.username}`);
});

client.addChannelListener('quest-completions', async (msg) => {
    try {
        const { content, author } = msg;
        
        if (content === '!complete quest1') {
    
        } else {
            // delete message from user
            msg.delete();
            
            // dm user telling them the format is wrong
            let dmChannel = author.dmChannel;
    
            if (!dmChannel) dmChannel = await author.createDM();

            dmChannel.send('You sent the wrong format `' + content + '`, to complete a quest send `!complete quest1`');
        }
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
});
