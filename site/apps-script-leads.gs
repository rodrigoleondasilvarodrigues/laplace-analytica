// Cole esse código no Apps Script da planilha "Leads - Laplace Analytica"
// Extensions > Apps Script > Cole aqui > Salvar > Deploy > New deployment
// Tipo: Web App | Execute as: Me | Who has access: Anyone
// Copie a URL gerada e cole em script.js no lugar de APPS_SCRIPT_URL

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var data = JSON.parse(e.postData.contents);

    var now = new Date();
    var dataFormatada = Utilities.formatDate(now, 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm:ss');

    sheet.appendRow([
      dataFormatada,
      data.person_name  || '',
      data.company_name || '',
      data.email        || '',
      data.phone        || '',
      data.instagram    || '',
      data.revenue      || '',
      data.budget       || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
