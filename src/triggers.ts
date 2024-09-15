function formSubmitTrigger(): void {
  ScriptApp.newTrigger('responseToFormSubmit')
    .forForm(FormApp.getActiveForm())
    .onFormSubmit()
    .create();

  console.log('Form submit trigger created');
}

// create a trigger to ping supabase in >almost< 7 days to avoid hibernation
function supabasePingTrigger(): void {
  const triggers = ScriptApp.getProjectTriggers();

  const existingTrigger = triggers.find(
    (trigger): GoogleAppsScript.Script.Trigger | undefined  => {
      if (trigger.getHandlerFunction() === 'pingSupabase') {
        return trigger;
      }
    }
  );

  if (existingTrigger) {
    console.log('Supabase ping trigger already exists. Deleting...');
    ScriptApp.deleteTrigger(existingTrigger);
    console.log('Old Supabase ping trigger deleted');
  }

  const oneMinute = 60 * 1000;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  ScriptApp.newTrigger('pingSupabase')
    .timeBased()
    .after(oneDay * 6 + oneHour * 23)
    .create();

  console.log('New supabase ping trigger created');
}