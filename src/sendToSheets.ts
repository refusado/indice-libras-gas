function sendToSheets(rowData: RowData) {
  console.log('Sending row data to sheets...');

  if (!rowData) {
    throw new Error('Row data is empty.');
  }

  const sheet = getSheet();

  sheet.appendRow([
    rowData.id,
    rowData.sentAt,
    rowData.slug,
    rowData.term,
    rowData.videoURL,
    rowData.startsAt,
    rowData.endsAt,
  ]);
}