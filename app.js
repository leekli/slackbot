// app.js - Slackbot

const { App } = require("@slack/bolt");
const dotenv = require("dotenv");
dotenv.config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

async function startBot() {
  const startUp = await app.start(process.env.PORT || 3000);

  console.log("⚡️ BoltBot is online... 🤖");
}

startBot();
