
// 1) Crie um programa que dado um número imprima a sua tabuada.
let resultado = 0;
function tabuada(numero){
  for (let i = 1; i <= 10; i++) {
  resultado = i * numero;
  console.log(`${numero} x ${i} = ${resultado}`); 
  }
}
tabuada(2);
tabuada(10);
tabuada(9);