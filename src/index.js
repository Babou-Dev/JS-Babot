const GoToClient = require("./structures/GoToClient");
require("dotenv").config();

let client = new GoToClient({
  prefix: "!",
});

client.login(process.env.TOKEN);
