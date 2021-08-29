const { Command } = require("discord-akairo");

class UserInfoCommand extends Command {
  constructor() {
    super("userinfo", {
      aliases: ["userinfo", "info"],
      description: "This command gives you informations of a user",
      // ignoreCooldown: "622351654376964116",
      // ignorePermissions: "622351654376964116",
      userPermissions: "KICK_MEMBERS",
      clientPermissions: "KICK_MEMBERS",
      rateLimit: 2,
      cooldown: 5000,
      typing: false,
      ownerOnly: true,
      channel: "guild",
      // args: [
      //   {id: "firstArgs", match: "content"},
      //   {id: "secondArgs", match: "rest"},
      // ],
      args: [{ id: "member", type: "member", default: (message) => message.member }],
    });
  }

  exec(message, args) {
    return message.channel.send({
      embeds: [
        this.client.functions
          .embed()
          .setTitle(`${args.member.displayName} ${args.member.id}`)
          .setThumbnail(args.member.user.displayAvatarURL())
          .setDescription(`Son compte à été créer le ${args.member.user.createdAt}`),
      ],
    });
  }
}

module.exports = UserInfoCommand;
