document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioTriangulo').addEventListener('submit', function(event) {
        event.preventDefault();
        clasificarTriangulo();
    });
});

function clasificarTriangulo() {
    
    var ladoA = parseFloat(document.getElementById('ladoA').value);
    var ladoB = parseFloat(document.getElementById('ladoB').value);
    var ladoC = parseFloat(document.getElementById('ladoC').value);

    
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, introduce valores numéricos positivos para todos los lados.';
        return;
    }

    
    var tipo;
    if (ladoA === ladoB && ladoB === ladoC) {
        tipo = 'equilátero';
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        tipo = 'isósceles';
    } else {
        tipo = 'escaleno';
    }

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = 'El triángulo es ' + tipo;
}