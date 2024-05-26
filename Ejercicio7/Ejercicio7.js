document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('divisionForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    performEuclideanDivision();
  });
});

function performEuclideanDivision() {
  const dividend = parseInt(document.getElementById('dividend').value, 10);
  const divisor = parseInt(document.getElementById('divisor').value, 10);
  const resultDiv = document.getElementById('result');

  if (isNaN(dividend) || isNaN(divisor) || dividend < 0 || divisor <= 0) {
    resultDiv.textContent = 'Por favor, introduce números enteros positivos válidos.';
    return;
  }

  const quotient = Math.floor(dividend / divisor);
  const remainder = dividend % divisor;

  resultDiv.textContent = 'Cociente: '+ quotient +' Resto: '+remainder;
}