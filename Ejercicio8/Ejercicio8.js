document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mcdForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      calculateMCD();
    });
  });
  
  function calculateMCD() {
    const number1 = parseInt(document.getElementById('number1').value, 10);
    const number2 = parseInt(document.getElementById('number2').value, 10);
    const resultDiv = document.getElementById('result');
  
    if (isNaN(number1) || number1 <= 0) {
      resultDiv.textContent = 'Por favor, introduce un número entero positivo para el Número 1.';
      return;
    }
  
    if (isNaN(number2) || number2 <= 0) {
      resultDiv.textContent = 'Por favor, introduce un número entero positivo para el Número 2.';
      return;
    }
  
    const gcd = euclides(number1, number2);
    resultDiv.textContent = 'El MCD de '+number1+' y '+number2+ ' es: ' +gcd;
  }
  
  function euclides(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  