var operandoA;
var operandoB;
var operacion;

function init() {
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
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var multiplicacion = document.getElementById("multiplicacion");
  var division = document.getElementById("division");
  var porcentaje = document.getElementById("porcentaje");
  var igual = document.getElementById("igual");
  var reset = document.getElementById("reset");
  var eliminar = document.getElementById("eliminar");

  uno.onclick = function () {
    resultado.textContent += "1";
  };
  dos.onclick = function () {
    resultado.textContent += "2";
  };
  tres.onclick = function () {
    resultado.textContent += "3";
  };
  cuatro.onclick = function () {
    resultado.textContent += "4";
  };
  cinco.onclick = function () {
    resultado.textContent += "5";
  };
  seis.onclick = function () {
    resultado.textContent += "6";
  };
  siete.onclick = function () {
    resultado.textContent += "7";
  };
  ocho.onclick = function () {
    resultado.textContent += +"8";
  };
  nueve.onclick = function () {
    resultado.textContent += "9";
  };
  cero.onclick = function () {
    resultado.textContent += "0";
  };

  reset.onclick = function () {
    resetear();
  };
  suma.onclick = function () {
    operandoA = resultado.textContent;
    operacion = "+";
    limpiar();
  };
  resta.onclick = function () {
    operandoA = resultado.textContent;
    operacion = "-";
    limpiar();
  };
  division.onclick = function () {
    operandoA = resultado.textContent;
    operacion = "/";
    limpiar();
  };
  multiplicacion.onclick = function () {
    operandoA = resultado.textContent;
    operacion = "*";
    limpiar();
  };
  porcentaje.onclick = function () {
    operacion = "";
  };
}
