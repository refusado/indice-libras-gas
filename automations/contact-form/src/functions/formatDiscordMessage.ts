function formatDiscordMessage(responses: FormFieldResponse[]): string {
  if (!SUBJECT_FIELD_ID || !MESSAGE_FIELD_ID) {
    throw new Error('Missing "SUBJECT_FIELD_ID" or "MESSAGE_FIELD_ID"');
  }
  
  const subjectResponse = responses.find((response) => response.id == SUBJECT_FIELD_ID);
  const messageResponse = responses.find((response) => response.id == MESSAGE_FIELD_ID);

  if (!messageResponse || !subjectResponse) {
    console.log('reponses: ', responses);

    throw new Error('Missing "messageResponse" or "subjectResponse"');
  }

  const subject = subjectResponse.value;
  const text = messageResponse.value;

  let message = 'Nova mensagem :envelope_with_arrow:\n\n';

  if (DISCORD_MENTION_ROLE) {
    message = `${DISCORD_MENTION_ROLE} nova mensagem :envelope_with_arrow:\n\n`;
  }

  message += `Assunto: **${subject}**\n`;
  message += `Enviado em: \`${new Date().toLocaleString()}\` \n\n`;
  
  message += `Mensagem: \n`;
  message += "```";
  message += text;
  message += "```";

  return message;
}