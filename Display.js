class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this._displayValorAnterior = displayValorAnterior;
    this._displayValorActual = displayValorActual;
    this._calculador = new Calculadora();
    this._tipoOperacion = undefined;
    this._valorActual = "";
    this._valorAnterior = "";
  }
  //Esta funcion esta bien
  borrar() {
    this._valorActual = this._valorActual.toString().slice(0, -1);
    this.imprimirValores();
  }
  //Esta funcion esta bien
  borrarTodo() {
    this._valorAnterior = "";
    this._valorActual = "";
    this._tipoOperacion = undefined;
    this.imprimirValores();
  }

  computar(tipo) {
    this._tipoOperacion !== "igual" && this.calcular();
  }

  //Esta funcion esta bien
  agregarNumero(numero) {
    if (numero === "." && this._valorActual.includes(".")) return;
    this._valorActual = this._valorActual.toString() + numero.toString();
    this.imprimirValores();
  }

  //Esta funcion esta bien
  imprimirValores() {
    this._displayValorActual.textContent = this._valorActual;
    this._displayValorAnterior.textContent = this._valorAnterior;
  }
  //Esta funcion esta bien
  calcular() {
    const valorAnterior = parseFloat(this._valorAnterior);
    const valorActual = parseFloat(this._valorActual);

    if (isNaN(valorActual) || isNaN(valorAnterior)) return;
    this._valorActual = this._calculador[this._tipoOperacion](
      valorAnterior,
      valorActual
    );
  }
}
