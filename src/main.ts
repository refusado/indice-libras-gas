function responseToFormSubmit(event: GoogleAppsScript.Events.FormsOnFormSubmit) {
  const responses = extractResponses(event);
  const parsedData = parseFormData(responses);
  const formattedRow = formatRowData(parsedData);

  sendToSheets(formattedRow);
}

function pingSupabase() {
  // TODO: make an HTTP request to supabase
  console.log("ping supabase");

  supabasePingTrigger();
}