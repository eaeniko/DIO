// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

// 1 debito, 2 dinheiro/pix, 3 duas vezes, 4 acima de duas vezes;
const precoEtiqueta = 100;
const formaDePagamento = 4;
let valorFinal = 0;

if (formaDePagamento === 1) {
  valorFinal = precoEtiqueta * 0.1
  console.log(precoEtiqueta - valorFinal);
  
} else if (formaDePagamento === 2) {
  valorFinal = precoEtiqueta * 0.15
  console.log(precoEtiqueta - valorFinal);
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else {
  valorFinal = precoEtiqueta * 0.1
  console.log(precoEtiqueta + valorFinal);
}