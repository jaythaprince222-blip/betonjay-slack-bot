const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.event('app_home_opened', async ({ event, say }) => {
  await say('BetOnJay bot is live!');
});

(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ BetOnJay Slack bot running on port 3000');
})();
