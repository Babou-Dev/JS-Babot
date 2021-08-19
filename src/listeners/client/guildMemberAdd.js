const { Listener } = require("discord-akairo");

class GuildMemberAddListener extends Listener {
  constructor() {
    super("guildMemberAdd", {
      emitter: "client",
      event: "guildMemberAdd",
    });
  }

  exec(member) {
    console.log(`Hey! ${member.user.username} à rejoint la team !`);
  }
}

module.exports = GuildMemberAddListener;
