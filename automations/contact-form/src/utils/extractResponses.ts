function extractResponses(event: GoogleAppsScript.Events.FormsOnFormSubmit):
GoogleAppsScript.Forms.ItemResponse[] {
  let responses: GoogleAppsScript.Forms.ItemResponse[] = [];
  
  // for some reason sometimes the form event return an empty itemResponses
  // this loop will get around this problem
  for (let i = 0; i < GET_RESPONSES_MAX_RETRIES; i++) {
    responses = event.response.getItemResponses();

    if (responses.length > 0) break;

    console.log(`No itemResponses (${i + 1}). Retrying in 2 seconds...`);
    Utilities.sleep(2000);
  }
  
  if (responses.length <= 0) {
    throw new Error("Form event returned no itemResponses");
  }

  return responses;
}