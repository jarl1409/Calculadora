const displayValorAnterior = document.getElementById('valor-Anterior')
const displayValorActual = document.getElementById('valor-Actual')

const botonesNumeros = document.querySelectorAll('.numero')
const botonesOperadores = document.querySelectorAll('.operador')



const calculadora = new Calculadora()

console.log(calculadora.sumar(2,3));

console.log(calculadora.restar(2,3));

console.log(calculadora.dividir(2,10));

console.log(calculadora.multiplicar(7,3));