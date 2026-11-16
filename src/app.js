
(() => {
  'use strict';
  const form = document.getElementById('booking-form');
  const dateField = document.getElementById('fecha');
  const result = document.getElementById('form-result');
  if (!form || !dateField || !result) return;
  
  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  dateField.min = `${y}-${m}-${d}`;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.className = 'form-result';
    if (!form.reportValidity()) {
      result.textContent = 'Selecciona una especialidad, una fecha y un bloque de atención.';
      result.classList.add('error');
      return;
    }
    if (dateField.value < dateField.min) {
      result.textContent = 'Selecciona una fecha de hoy o posterior.';
      result.classList.add('error');
      return;
    }

    result.textContent = 'Simulación completada en este navegador. No se realizó una reserva real ni se envió información.';
    result.classList.add('success');
  });
})();
