// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
// const numerosPares = [];
// const numerosImpares = [];
// function verficaNumeroPar(numero) {
	
// 	for (let i = 0; i <= numero; i++){
// 		let isPar = i % 2 === 0;
// 		if (isPar == true) {
// 		numerosPares.push(i);
// 		// console.log(i); numeros pares
// 		} else {
// 			numerosImpares.push(i);
// 		}
// 	}
// 	console.log(`Pares:${numerosPares}`);
// 	// console.log(`Impares:[${numerosImpares}]`);
// }
// verficaNumeroPar(25);

const numeros = [1,2,4,6,8,10,11,12];
const numerosImpares = [];
function verficaNumeroPar(numero) {
	const numerosPares = [];
	for (let i = 0; i <= numero.length; i++){
		let isPar = numero[i] % 2 === 0;
		// const numeros = numero[i];
		if (isPar == true) {
		numerosPares.push(numero[i]);
		// console.log(i); numeros pares
		} else {
			numerosImpares.push(i);
		}
	}
	console.log(`Pares:${numerosPares}`);
	// console.log(`Impares:[${numerosImpares}]`);
}
verficaNumeroPar(numeros);