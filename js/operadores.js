document.getElementById("suma").addEventListener('click', () => setOperador('+'));
document.getElementById("resta").addEventListener('click', () => setOperador('-'));
document.getElementById("multiplicacion").addEventListener('click', () => setOperador('x'));
document.getElementById("division").addEventListener('click', () => setOperador('÷'));
document.getElementById("porcentaje").addEventListener('click', () => setOperador('%'));
document.getElementById("resultado").addEventListener('click', mostrarResultado);
