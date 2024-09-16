function responseToFormSubmit(event: GoogleAppsScript.Events.FormsOnFormSubmit) {
  const responses = extractResponses(event);
  const parsedData = parseFormData(responses);
  const formattedRow = formatRowData(parsedData);

  sendToSheets(formattedRow);
}