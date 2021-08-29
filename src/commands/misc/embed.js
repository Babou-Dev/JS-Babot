const { Command } = require("discord-akairo");

class EmbedCommand extends Command {
  constructor() {
    super("embed", {
      aliases: ["embed"],
    });
  }

  exec(message) {
    return message.channel.send({ embeds: [this.client.functions.embed().setDescription("Hello !")] });
  }
}

module.exports = EmbedCommand;
