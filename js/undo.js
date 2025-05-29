// undo.js: pila de deshacer
import { pacientesState } from './storage.js'; // Assumes storage.js is in js/

const stack = [];

export function pushAction() {
  stack.push(pacientesState.getAll());
  document.getElementById('undo-btn').disabled = false;
}

export function undo() {
  if (stack.length) {
    const prev = stack.pop();
    pacientesState.setAll(prev);
    if (!stack.length) document.getElementById('undo-btn').disabled = true;
    import('./ui.js').then(m => m.showToast('Acción deshecha')); // Dynamic import for ui.js
  }
}
