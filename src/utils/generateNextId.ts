function generateNextId(): number {
  const sheet = getSheet();
  const lastRow = sheet.getLastRow();
  const lastId = sheet.getRange(lastRow, ID_COLUMN_INDEX).getValue();

  if (typeof lastId !== 'number') {
    console.log(`Searching for the last ID in the range ${lastRow}:${ID_COLUMN_INDEX}`);
    throw new Error('Last ID in the sheet not found or is not a number');
  }

  return lastId + 1;
}