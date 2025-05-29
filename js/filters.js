// filters.js: búsqueda, resaltado y filtros multiparámetro

export function applyFilters(pacientes) {
  const term = document.getElementById('search-input').value.trim().toLowerCase();
  const hosp = document.getElementById('filter-hospital').value;
  const wheel = document.getElementById('filter-wheelchair').value;
  const cons = document.getElementById('filter-consult').value;

  let filteredPacientes = pacientes.filter(p => {
    let ok = true;
    if (term) {
      ok = ok && (
        p.nombre.toLowerCase().includes(term) ||
        p.consulta.toLowerCase().includes(term)
      );
    }
    if (hosp)    ok = ok && p.hospital === hosp;
    if (wheel)  ok = ok && String(p.wheelchair) === wheel;
    if (cons)    ok = ok && p.consulta === cons;
    return ok;
  });

  const showFavoritesBtn = document.getElementById('show-favorites-btn');
  if (showFavoritesBtn && showFavoritesBtn.classList.contains('active')) {
    filteredPacientes = filteredPacientes.filter(p => p.favorite === true);
  }

  return filteredPacientes;
}
