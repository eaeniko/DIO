/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustivel
2 - Gasto médio de combustivel do carro por KM;
3 - Distancia em KM da viagem;

*/
const valorCombustivel = 3.79;
let gastoMedioKm = 8.3;
let distanciaKmViagem = 200;

const litrosConsumidos = distanciaKmViagem / gastoMedioKm;
const valorGasto = litrosConsumidos * valorCombustivel

console.log("Gastei " + valorGasto.toFixed(2) + " reais nessa viagem");
