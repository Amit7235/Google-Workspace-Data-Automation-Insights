function automateKPITracking() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  var lastRow = sheet.getLastRow();
  var salesRange = sheet.getRange('B2:B' + lastRow);
  var salesData = salesRange.getValues();

  // Example: Highlight anomalies if sales < 1000
  for (var i = 0; i < salesData.length; i++) {
    if (salesData[i][0] < 1000) {
      sheet.getRange('B' + (i + 2)).setBackground('red');
    }
  }
}
