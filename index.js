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

client.client.on('messageReactionAdd', async (msgReaction, user) => {
    try {
        const { 
            message: { 
                channel: { name: channelName, guild }, 
                content: messageContent,
                author
            } 
        } = msgReaction;
    
        if (channelName === 'quest-completions'
            && messageContent == '!complete quest1') {
    
            if (guild.available) {
                const member = await guild.member(user);
                const memberRoles = member.roles.cache.map(role => role.name);

                if (memberRoles.includes('Diamond Founder')) {
                    const metaGamePlayerRole = guild.
                        roles.cache.find(role => role.name === 'MetaGame Player');

                    const messageAuthor = await guild.member(author);

                    await messageAuthor.roles.add([metaGamePlayerRole.id]);

                    let dmChannel = author.dmChannel;

                    if (!dmChannel) dmChannel = await author.createDM();

                    dmChannel.send('Welcome to MetaGamer');
                }
            }
        }
    } catch (e) {
        console.log(`Error: ${e.message}`);
    }
    
})
