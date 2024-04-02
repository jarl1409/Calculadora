var operandoA;
var operandoB;
var operacion;

function init() {
  var resultado = document.getElementById("resultado");
  var reset = document.getElementById("reset");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var porcentaje = document.getElementById("porcentaje");
  var igual = document.getElementById("igual");
  var eliminar = document.getElementById("eliminar");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
}
uno.onclick = function (e) {
  resultado.textContent += "1";
};
dos.onclick = function (e) {
  resultado.textContent += "2";
};
tres.onclick = function (e) {
  resultado.textContent += "3";
};
cuatro.onclick = function (e) {
  resultado.textContent += "4";
};
cinco.onclick = function (e) {
  resultado.textContent += "5";
};
seis.onclick = function (e) {
  resultado.textContent += "6";
};
siete.onclick = function (e) {
  resultado.textContent += "7";
};
ocho.onclick = function (e) {
  resultado.textContent += +"8";
};
nueve.onclick = function (e) {
  resultado.textContent += "9";
};
cero.onclick = function (e) {
  resultado.textContent += "0";
};

reset.onclick = function (e) {
  resetear();
};
suma.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "+";
  limpiar();
};
resta.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "-";  
  limpiar();
};
division.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "/";
  limpiar();
};
multiplicacion.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "*";
  limpiar();
};
porcentaje.onclick = function (e) {
  operandoA = resultado.textContent;
  operacion = "%";
};
igual.onclick = function (e) {
  operandoB = resultado.textContent;
  resolver();
};
function limpiar() {
  resultado.textContent = "";
}
function resetear() {
  resultado.textContent = "";
  operandoA = 0;
  operandoB = 0;
  operacion = "";
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoA) + parseFloat(operandoB);
      break;
    case "-":
      res = parseFloat(operandoA) - parseFloat(operandoB);
      break;
    case "/":
      res = parseFloat(operandoA) / parseFloat(operandoB);
      break;
    case "*":
      res = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case "%":
      res = (parseFloat(operandoA) * parseFloat(operandoB)) / 100;
  }
  resetear();
  resultado.textContent = res;
}

