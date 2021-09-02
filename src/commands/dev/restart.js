const { Command } = require("discord-akairo");

class RestartCommand extends Command {
  constructor() {
    super("restart", {
      aliases: ["restart", "rs"],
      ownerOnly: true,
      category: "Dev",
    });
  }

  exec() {
    require("child_process").execSync("pm2 restart 0");
  }
}

module.exports = RestartCommand;
