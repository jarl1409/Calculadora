class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculador();
    this.valorActual = "";
    this.valorAnterior = "";
  }
  agregarNumero(numero) {
    this.valorActual = numero;
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = this.valorAnterior;
  }
}
