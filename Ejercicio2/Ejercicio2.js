document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioRadio').addEventListener('submit', function(event) {
        event.preventDefault();
        calcularResultados();
    });
});

function calcularResultados() {
    var radio = document.getElementById('radio').value;
    if (radio <= 0) {
        alert('Por favor, introduce un número válido para el radio.');
        return;
    }
    var longitud = 2 * Math.PI * radio;

    var area = Math.PI * Math.pow(radio, 2);

    var volumen = (4/3) * Math.PI * Math.pow(radio, 3);

    document.getElementById('longitud').textContent = 'Longitud de la circunferencia: ' + longitud.toFixed(2);
    document.getElementById('area').textContent = 'Área del círculo: ' + area.toFixed(2);
    document.getElementById('volumen').textContent = 'Volumen de la esfera: ' + volumen.toFixed(2);
}