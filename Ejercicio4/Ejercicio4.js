document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('dniForm');
  form.onsubmit = function(event) {
    event.preventDefault();
    calculaLetra();
  };
});

function calculaLetra() {
  const dniNumber = document.getElementById('dniNumber').value;
  if (dniNumber && /^[0-9]{7,8}$/.test(dniNumber)) {
    const letter = 'TRWAGMYFPDXBNJZSQVHLCKET';
    const dniLetter = letter.charAt(parseInt(dniNumber, 10) % 23);
    document.getElementById('dniLetter').textContent = 'La letra de tu DNI es:'+dniLetter;
  } else {
    document.getElementById('dniLetter').textContent = 'Por favor, introduce un número de DNI válido.';
  }
}