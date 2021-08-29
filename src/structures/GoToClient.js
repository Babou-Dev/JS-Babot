const { embed } = require("../util/functions");
const { AkairoClient, CommandHandler, ListenerHandler } = require("discord-akairo");

module.exports = class GoToClient extends AkairoClient {
  constructor(config = {}) {
    super(
      { ownerID: "622351654376964116" },
      {
        allowedMentions: {
          parse: ["roles", "everyone", "users"],
          repliedUser: false,
        },
        partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"],
        presence: {
          status: "online",
          activities: [
            {
              name: "Babot",
              type: "STREAMING",
              url: "http://github.com/babou-Dev/",
            },
          ],
        },
        intents: 32767,
      }
    );

    this.CommandHandler = new CommandHandler(this, {
      allowMention: true,
      prefix: config.prefix,
      defaultCooldown: 2000,
      directory: "./src/commands/",
    });

    this.ListenerHandler = new ListenerHandler(this, {
      directory: "./src/listeners/",
    });

    this.functions = {
      embed: embed,
    };

    this.CommandHandler.loadAll();
    this.CommandHandler.useListenerHandler(this.ListenerHandler);
    this.ListenerHandler.loadAll();
  }
};
