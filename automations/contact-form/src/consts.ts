const GET_RESPONSES_MAX_RETRIES = 10;

const properties = PropertiesService.getScriptProperties();
const DISCORD_WEBHOOK = properties.getProperty('DISCORD_WEBHOOK') as string;

if (!DISCORD_WEBHOOK) {
  throw new Error('Missing "DISCORD_WEBHOOK" property');
}


// the role to be mentioned when a new form is submitted
const DISCORD_MENTION_ROLE = '<@&1257171971657957467>';

const SUBJECT_FIELD_ID = '1487217206';
const MESSAGE_FIELD_ID = '1238468656';