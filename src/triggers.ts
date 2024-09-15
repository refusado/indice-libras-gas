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
    console.log('Supabase ping trigger already exists');
    console.log(existingTrigger);
    ScriptApp.deleteTrigger(existingTrigger);
    console.log('Old Supabase ping trigger deleted');
  }

  ScriptApp.newTrigger('pingSupabase')
    .timeBased()
    .after(50000 * 24 * 7) // 6 days and 23 hours
    .create();

  console.log('New supabase ping trigger created');
}