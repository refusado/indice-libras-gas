function onOpen(event: GoogleAppsScript.Events.SheetsOnOpen) {
  // todo: check if user can have admin access

  ui
    .createMenu('Administração')
    .addItem('Atualizar plataforma', 'updatePlatform')
    .addToUi();
}