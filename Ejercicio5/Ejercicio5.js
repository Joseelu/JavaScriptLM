document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('caseForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    checkCase();
  });
});

function checkCase() {
  const inputText = document.getElementById('inputText').value;
  const resultDiv = document.getElementById('result');
  
  if (!inputText.match(/[a-zA-Z]/)) {
    resultDiv.textContent = 'La cadena debe contener al menos una letra.';
    return;
  }

  if (inputText === inputText.toUpperCase() && inputText !== inputText.toLowerCase()) {
    resultDiv.textContent = 'La cadena está en mayúsculas.';
  } else if (inputText === inputText.toLowerCase() && inputText !== inputText.toUpperCase()) {
    resultDiv.textContent = 'La cadena está en minúsculas.';
  } else {
    resultDiv.textContent = 'La cadena tiene una mezcla de mayúsculas y minúsculas.';
  }
}