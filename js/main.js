// main.js: punto de entrada y coordinación de módulos

import { pacientesState }   from './storage.js';
import { showSkeleton, renderPatients, showToast } from './ui.js';
import { applyFilters }      from './filters.js';
import { applySort }         from './sort.js';
import { exportCSV, exportExcel, importFile } from './export.js';
import { pushAction, undo }  from './undo.js';
import { initVoiceSearch }   from './voice.js';

function updateView() {
  showSkeleton();
  setTimeout(() => { // simulamos carga
    let list = pacientesState.getAll();
    list = applyFilters(list);
    list = applySort(list);
    renderPatients(list);
  }, 150);
}

document.addEventListener('DOMContentLoaded', () => {
  // Tema oscuro/claro
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    html.dataset.theme = html.dataset.theme === 'light' ? 'dark' : 'light';
  });

  // Filtros y orden
  ['search-input','filter-hospital','filter-wheelchair','filter-consult','sort-select']
    .forEach(id => document.getElementById(id).addEventListener('change', updateView));
  document.getElementById('clear-filters').addEventListener('click', () => {
    ['search-input','filter-hospital','filter-wheelchair','filter-consult'].forEach(id =>
      document.getElementById(id).value = ''
    );
    document.getElementById('show-favorites-btn').classList.remove('active');
    updateView();
  });

  // Botón de mostrar favoritos
  const showFavoritesBtn = document.getElementById('show-favorites-btn');
  if (showFavoritesBtn) {
    showFavoritesBtn.addEventListener('click', () => {
      showFavoritesBtn.classList.toggle('active');
      updateView();
    });
  }

  // Exportación / Importación
  // ... (rest of the code) ...
  // Suscripción al estado
  pacientesState.subscribe(() => updateView());

  // Carga inicial
  showSkeleton();
  updateView();
});
