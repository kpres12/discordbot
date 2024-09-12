const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("CTF Bot is online!");
});

client.on("messageCreate", (message) => {
  if (message.content.toLowerCase() === "!ctfstart") {
    message.channel.send(
      "Welcome to the CTF challenge! Your first challenge is: [Description here]. Submit your answer with `!ctfsubmit <your_answer>`",
    );
  }
});

client.login("YOUR_BOT_TOKEN");
