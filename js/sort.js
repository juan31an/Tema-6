// sort.js: funciones de ordenamiento
export function applySort(pacientes) {
  const orden = document.getElementById('sort-select').value;
  return pacientes.sort((a, b) => {
    switch (orden) {
      case 'nombre-asc':   return a.nombre.localeCompare(b.nombre);
      case 'nombre-desc':  return b.nombre.localeCompare(a.nombre);
      case 'fecha-desc':   return new Date(b.fechaRegistro) - new Date(a.fechaRegistro);
      case 'fecha-asc':    return new Date(a.fechaRegistro) - new Date(b.fechaRegistro);
      case 'pueblo-asc':   return a.pueblo.localeCompare(b.pueblo);
      case 'pueblo-desc':  return b.pueblo.localeCompare(a.pueblo);
      default:             return 0;
    }
  });
}
