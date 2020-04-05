const Discord = require('discord.js');

class DiscordClient {
    constructor(botToken) {
        this.client = new Discord.Client();

        if (!botToken) throw Error('Bot token is required');

        this._login(botToken);
    }

    async _login(botToken) {
        try {
            await this.client.login(botToken);
        } catch (e) {
            console.log(`Error: ${e.message}`);
        }
    }


    addEventListener(event, listener) {
        if (typeof event !== 'string') 
            throw TypeError('Event should be a string');

        if (typeof listener !== 'function') 
            throw TypeError('Listener should be a function');

        this.client.on(event, listener);
    }

    onReady(fn) {
        this.addEventListener('ready', fn);
    }
}

module.exports = DiscordClient;
