function updatePlatform(): void {
  if (!BUILD_WEBHOOK) {
    throw new Error('Property "BUILD_WEBHOOK" not found');
  }
  
  const result = modalConfirmation();

  if (result == ui.Button.CANCEL || result != ui.Button.OK) {
    return;
  }
  
  const response = UrlFetchApp.fetch(BUILD_WEBHOOK);
  
  console.log(response.getContentText());
  
  ui.alert('Processo de build iniciado. Você pode fechar esta janela, isto levará um tempo.');

  // this is the avarage time it takes for a build to complete
  // should be enough time to update the platform
  Utilities.sleep(55000);

  ui.alert('Build finalizado. A plataforma atualizará a qualquer momento.');
}

function modalConfirmation(): GoogleAppsScript.Base.Button {
  const title = 'Atualizar plataforma';
  const description = `Execute esta ação apenas quando tiver certeza de que todas as informações estão corretas.
  
  Esta ação irá executar o processo de build da plataforma do zero, demorará alguns minutos e pode interditar o acesso ao site durante o processo.`

  return ui.alert(title, description, ui.ButtonSet.OK_CANCEL);
}