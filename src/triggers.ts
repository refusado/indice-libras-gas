function formSubmitTrigger(): void {
  ScriptApp.newTrigger('responseToFormSubmit')
    .forForm(FormApp.getActiveForm())
    .onFormSubmit()
    .create();

  console.log('Form submit trigger created');
}