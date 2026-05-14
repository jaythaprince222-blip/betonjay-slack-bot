import express from "express";
import bodyParser from "body-parser";
import { WebClient } from "@slack/web-api";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const client = new WebClient(process.env.SLACK_BOT_TOKEN);

app.post("/slack/commands", async (req, res) => {
  const { channel_id, user_name } = req.body;

  await client.chat.postMessage({
    channel: channel_id,
    text: `Hey ${user_name}, your BetOnJay bot is live!`
  });

  res.status(200).send();
});
app.listen(port, () => {
  console.log(`⚡ BetOnJay Slack bot running on port ${port}`);
});
