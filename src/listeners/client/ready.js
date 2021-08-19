const { Listener } = require("discord-akairo");

class ReadyListener extends Listener {
  constructor() {
    super("ready", {
      emitter: "client",
      event: "ready",
    });
  }

  exec() {
    console.log("Beep Boop, je suis prêt ! 🤖");
  }
}

module.exports = ReadyListener;
