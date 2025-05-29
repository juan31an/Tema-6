// voice.js: Web Speech API • https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API

export function initVoiceSearch(onResult) {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) return null;

  const rec = new SpeechRec();
  rec.lang       = 'es-ES';
  rec.continuous = false;
  rec.onresult   = e => onResult(e.results[0][0].transcript);
  rec.onerror    = e => console.error(e);
  return rec;
}
