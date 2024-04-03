class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this._displayValorAnterior = displayValorAnterior;
    this._displayValorActual = displayValorActual;
    this._calculador = new Calculadora();
    this._valorActual = "";
    this._valorAnterior = "";
  }

  borrar() {
    this._valorActual = this._valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this._valorActual.includes(".")) return;
    this._valorActual = this._valorActual.toString() + numero.toString();
    this.imprimirValores();
  }
  imprimirValores() {
    this._displayValorActual.textContent = this._valorActual;
    this._displayValorAnterior.textContent = this._valorAnterior;
  }
}
