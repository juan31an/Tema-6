// export.js: CSV, JSON y Excel (SheetJS) • https://github.com/SheetJS/sheetjs

import { pacientesState } from './storage.js'; // Assumes storage.js is in js/

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a   = document.createElement('a');
  a.href      = url;
  a.download  = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function exportCSV() {
  const data = pacientesState.getAll();
  const headers = ['id','nombre','hospital','pueblo','consulta','fechaRegistro','wheelchair'];
  const csv = [
    headers.join(','),
    ...data.map(p =>
      headers.map(h => JSON.stringify(p[h] ?? '')).join(',')
    )
  ].join('\n');
  downloadBlob(new Blob([csv], { type: 'text/csv' }), 'pacientes.csv');
}

export function exportExcel() {
  const ws = XLSX.utils.json_to_sheet(pacientesState.getAll());
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Pacientes');
  XLSX.writeFile(wb, 'pacientes.xlsx');
}

export function importFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    let list = [];
    if (file.name.endsWith('.csv')) {
      list = parseCSV(e.target.result);
    } else {
      list = JSON.parse(e.target.result);
    }
    pacientesState.setAll(list);
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  const [headerLine, ...lines] = text.split('\n');
  const headers = headerLine.split(',');
  return lines.map(line => {
    const vals = line.match(/(".*?"|[^,]+)(?=\s*,|\s*$)/g); // Corrected regex escape for subtask
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = JSON.parse(vals[i] || '""');
    });
    return obj;
  });
}
