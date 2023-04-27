// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

// 1 debito, 2 dinheiro/pix, 3 duas vezes, 4 acima de duas vezes;


function aplicarDesconto(valor, desconto) {
  return (valor - (valor * (desconto / 100)));
}

function aplicaJuros(valor, juros) {
  return (valor + (valor * (juros / 100)));
}


function calculaPrecoEtiqueta(precoEtiqueta, formaDePagamento){

  if (formaDePagamento === 1) {
    console.log('Valor: '+ aplicarDesconto(precoEtiqueta, 10));
    
  } else if (formaDePagamento === 2) {
    console.log('Valor: '+ aplicarDesconto(precoEtiqueta, 15));
  } else if (formaDePagamento === 3) {
    console.log('Valor: '+ precoEtiqueta);
  } else {
    console.log('Valor: '+ aplicaJuros(precoEtiqueta, 10));
  }
}
calculaPrecoEtiqueta(100, 1);
calculaPrecoEtiqueta(100, 2);
calculaPrecoEtiqueta(100, 3);
calculaPrecoEtiqueta(100, 4);