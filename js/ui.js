// ui.js: renderizado, toasts, selección, copiar, imprimir

import { pacientesState } from './storage.js'; // Assumes storage.js is in js/
// applyFilters and applySort are used by main.js, not directly by ui.js based on original code.
// import { applyFilters } from './filters.js';
// import { applySort } from './sort.js';
import { updateChart } from './charts.js'; // Assumes charts.js is in js/

const container   = document.getElementById('patient-container');
const resultCount = document.getElementById('result-count');

export function showSkeleton(count = 6) {
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const sk = document.createElement('div');
    sk.className = 'patient-card skeleton';
    sk.innerHTML = `
      <div class="skeleton-text"></div>
      <div class="skeleton-text" style="width:80%"></div>
    `;
    container.append(sk);
  }
}

export function renderPatients(pacientes) {
  container.innerHTML = '';
  pacientes.forEach(p => {
    const card = document.createElement('div');
    card.className = 'patient-card';
    card.tabIndex = 0;
    card.dataset.id = p.id;
    card.innerHTML = `
      <h2>${p.nombre}</h2>
      <p><strong>Hospital:</strong> ${p.hospital}</p>
      <p><strong>Pueblo:</strong> ${p.pueblo}</p>
      <p><strong>Consulta:</strong> ${p.consulta}</p>
      <p><strong>Fecha:</strong> ${new Date(p.fechaRegistro).toLocaleDateString()}</p>
      <p><strong>Silla de ruedas:</strong> ${p.wheelchair ? 'Sí' : 'No'}</p>
      <button class="fav-btn" aria-label="Marcar favorito">${p.favorite ? '★' : '☆'}</button>
      <button class="copy-btn" aria-label="Copiar al portapapeles">📋</button>
      <button class="print-btn" aria-label="Imprimir ficha">🖨️</button>
    `;

    // Acciones de cada tarjeta
    card.addEventListener('click', () => {
      const sel = card.getAttribute('aria-selected') === 'true';
      card.setAttribute('aria-selected', !sel);
      document.getElementById('bulk-delete').disabled = !container.querySelector('[aria-selected="true"]');
    });
    card.querySelector('.fav-btn').addEventListener('click', e => {
      e.stopPropagation();
      pacientesState.update(p.id, { favorite: !p.favorite });
    });
    card.querySelector('.copy-btn').addEventListener('click', e => {
      e.stopPropagation();
      navigator.clipboard.writeText(JSON.stringify(p, null, 2));
      showToast('Datos copiados al portapapeles');
    });
    card.querySelector('.print-btn').addEventListener('click', e => {
      e.stopPropagation();
      const w = window.open();
      w.document.write(`<pre>${JSON.stringify(p, null, 2)}</pre>`);
      w.print();
      w.close();
    });

    container.append(card);
  });

  resultCount.textContent = `${pacientes.length} pacientes encontrados`;
  updateChart(pacientes); // Call updateChart from ui.js
}

export function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.getElementById('toast-container').append(toast);
  setTimeout(() => toast.remove(), duration);
}
