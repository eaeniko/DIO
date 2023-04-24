/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol
2 - Preço da gasolina;
3 - Gasto médio de combustivel do carro por KM;
4 - O Tipo de combustível;
5 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem

*/

const precoGasolina = 5.20;
const precoEtanol = 3.79;
const gastoMedioKmEtanol = 7.5;
const gastoMedioKmGasolina = 9;
const distanciaEmKM = 200;
let gastoMedioKm = 0;
// const isEtanol = true; 
// const combustivelSelecionado = isEtanol;
const combustivelSelecionado = 'a';


if (combustivelSelecionado === 'Etanol') {
  gastoMedioKm = distanciaEmKM / gastoMedioKmEtanol;
  valorGastoEtanol = gastoMedioKm * precoEtanol;
  console.log('gastou ' + gastoMedioKm.toFixed(2) + ' litros e ' + valorGastoEtanol.toFixed(2) + ' reais');
  // console.log(gastoMedioKm.toFixed(2) + valorGastoEtanol);
  
} else if (combustivelSelecionado === 'Gasolina') {
  gastoMedioKm = distanciaEmKM / gastoMedioKmGasolina;
  valorGastoGasolina = gastoMedioKm * precoGasolina;
  // console.log('gastou ' + gastoMedioKm.toFixed(2) + ' litros e' valorGasto + ' reais');
  console.log('gastou ' + gastoMedioKm.toFixed(2) + ' litros e ' + valorGastoGasolina.toFixed(2) + ' reais');
} else {
  console.log('Combustivel não reconhecido');
}
