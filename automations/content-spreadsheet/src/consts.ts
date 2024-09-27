const ui = SpreadsheetApp.getUi();
const scriptProperties = PropertiesService.getScriptProperties();

const BUILD_WEBHOOK = scriptProperties.getProperty('BUILD_WEBHOOK');