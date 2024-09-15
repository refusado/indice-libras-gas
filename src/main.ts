function responseToFormSubmit(event: GoogleAppsScript.Events.FormsOnFormSubmit) {
  let responses: GoogleAppsScript.Forms.ItemResponse[] = [];
  
  // for some reason sometimes the form event return an empty itemResponses
  // this loop will get around this problem
  for (let i = 0; i < 10; i++) {
    responses = event.response.getItemResponses();

    if (responses.length > 0) break;

    console.log(`No itemResponses (${i + 1}). Retrying in 2 seconds...`);
    Utilities.sleep(2000);
  }
  
  if (responses.length <= 0) {
    throw new Error("Form event returned no itemResponses");
  }

  parseFormData(responses);
}

function pingSupabase() {
  // TODO: make an HTTP request to supabase
  console.log("ping supabase");

  supabasePingTrigger();
}