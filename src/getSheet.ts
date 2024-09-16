function getSheet(): GoogleAppsScript.Spreadsheet.Sheet {
  if (!SPREADSHEET_ID || !SHEET_NAME) {
    throw new Error('Variables "SPREADSHEET_ID" and "SHEET_NAME" not found.');
  }

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    throw new Error(`Sheet "${SHEET_NAME}" in spreadsheet "${SPREADSHEET_ID}" not found.`);
  }

  return sheet;
}