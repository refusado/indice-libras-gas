function sendMessateToDiscord(parsedData: FormFieldResponse[]) {
  const message: string = formatDiscordMessage(parsedData);

  const response = UrlFetchApp.fetch(DISCORD_WEBHOOK, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    payload: JSON.stringify({
      content: message,
    })
  });
  
  const status = response.getResponseCode();

  if (status >= 200 && status < 300) return true;

  console.log('Message size: ' + message.length);
  
  console.log(`
> Request: ${DISCORD_WEBHOOK}
> Status: ${status}
> Text: ${response.getContentText()}
  `);

  throw new Error('Failed to send message to Discord');
}