let a = 0;
let b = 0;
let operador = "";

const mostrarResultado = () => {
  calcular();
  document.getElementById("resultado").innerHTML = a;
};

const setNumero = (num) => {
  if (operador === "") {
    a = a * 10 + num;
  } else {
    b = b * 10 + num;
  }
  mostrarResultado();
};

const setOperador = (op) => {
  operador = op;
  mostrarResultado();
};

const calcular = () => {
  switch (operador) {
    case "+":
      a += b;
      break;
    case "-":
      a -= b;
      break;
    case "x":
      a *= b;
      break;
    case "÷":
      a /= b;
      break;
    case "%":
      a %= b;
      break;
    default:
      break;
  }
  b = 0;
  operador = "";
};
