document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('palindromeForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkPalindrome();
  });
});

function checkPalindrome() {
  const inputText = document.getElementById('inputText').value.replace(/[\W_]/g, '').toLowerCase();
  const reversedText = inputText.split('').reverse().join('');
  const resultDiv = document.getElementById('result');

  if (inputText === reversedText) {
    resultDiv.textContent = 'La cadena es un palíndromo.';
  } else {
    const palindrome = inputText + reversedText;
    resultDiv.textContent = 'La cadena no es un palíndromo. El palíndromo generado es:' + palindrome;
  }
}