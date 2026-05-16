// Import dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Slack Event Verification Route
app.post('/slack/events', (req, res) => {
  if (req.body.type === 'url_verification') {
    return res.send({ challenge: req.body.challenge });
  }

  console.log('Received event:', req.body);
  res.sendStatus(200);
});

// ✅ Slack Command Route
app.post('/slack/commands', (req, res) => {
  const { command, text, user_name } = req.body;

  if (command === '/betonjay') {
    res.send(`Hey ${user_name}, your BetOnJay bot is live!`);
  } else {
    res.send('Unknown command.');
  }
});

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('🚀 BetOnJay Slack Bot is running!');
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 BetOnJay Slack bot running on port ${port}`);
});
