document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mesForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      mostrarNombreDelMes();
    });
  });
  
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  function mostrarNombreDelMes() {
    const mesNumero = parseInt(document.getElementById('mes').value, 10);
    const resultDiv = document.getElementById('result');
  
    if (isNaN(mesNumero) || mesNumero < 1 || mesNumero > 12) {
      resultDiv.textContent = 'Por favor, selecciona un número de mes válido.';
      return;
    }
  
    const mesNombre = meses[mesNumero - 1];
    resultDiv.textContent = 'El mes seleccionado es: '+ mesNombre;
  }
  