app.post("/slack/commands", async (req, res) => {
  const { channel_id, user_name } = req.body;

  await client.chat.postMessage({
    channel: channel_id,
    text: `Hey ${user_name}, your BetOnJay bot is live!`
  });

  res.status(200).send();
});
