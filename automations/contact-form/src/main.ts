
function onSubmit(event: GoogleAppsScript.Events.FormsOnFormSubmit) {
  const responses = extractResponses(event);
  const parsedData = parseFormData(responses);

  sendMessateToDiscord(parsedData);
}


