// storage.js: gestión de estado centralizada (Patrón Observer)
// Basado en MDN: https://developer.mozilla.org/es/docs/Web/API/Storage

export const pacientesState = (() => {
  let pacientes = [];
  const listeners = [];

  function load() {
    const raw = localStorage.getItem('pacientes');
    pacientes = raw ? JSON.parse(raw) : [];
  }
  function save() {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }
  function getAll() {
    return [...pacientes];
  }
  function setAll(newList) {
    pacientes = [...newList];
    save();
    notify();
  }
  function add(p) {
    pacientes.push(p);
    save();
    notify();
  }
  function update(id, data) {
    pacientes = pacientes.map(p =>
      p.id === id ? { ...p, ...data } : p
    );
    save();
    notify();
  }
  function remove(ids) {
    pacientes = pacientes.filter(p => !ids.includes(p.id));
    save();
    notify();
  }
  function subscribe(fn) {
    listeners.push(fn);
  }
  function notify() {
    listeners.forEach(fn => fn(getAll()));
  }

  load();
  return { getAll, setAll, add, update, remove, subscribe };
})();
