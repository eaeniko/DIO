// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetros rodado.
// Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
  marca;
  cor;
  gastoMedioPorKm;
  constructor (marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm.toFixed(2);
  }
  calculaGastoMedio (distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }
}

const carro1 = new Carro('Fiat', 'Prata', 1/6.5);
console.log('Gastou R$' + carro1.calculaGastoMedio(200, 3.99).toFixed(2)+ ' reais. Com gasto medio por Km de ' + carro1.gastoMedioPorKm);