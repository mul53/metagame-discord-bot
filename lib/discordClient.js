const Discord = require("discord.js");

class DiscordClient {
  constructor(botToken) {
    this.client = new Discord.Client();

    if (!botToken) throw Error("Bot token is required");

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
    if (typeof event !== "string") throw TypeError("Event should be a string");

    if (typeof listener !== "function")
      throw TypeError("Listener should be a function");

    this.client.on(event, listener);
  }

  addChannelListener(channelName, listener) {
    if (typeof channelName !== "string")
      throw TypeError("ChannelName should be a string");

    if (typeof listener !== "function")
      throw TypeError("Listener should be a function");

    this.addEventListener("message", (msg) => {
      const {
        channel: { name: requestedChannelName },
      } = msg;

      if (channelName === requestedChannelName) {
        listener(msg);
      }
    });
  }

  async sendDirectMessage(user, message) {
    let dmChannel = user.dmChannel;

    if (!dmChannel) dmChannel = await user.createDM();

    dmChannel.send(message);
  }

  onReady(fn) {
    this.addEventListener("ready", fn);
  }
}

module.exports = DiscordClient;
