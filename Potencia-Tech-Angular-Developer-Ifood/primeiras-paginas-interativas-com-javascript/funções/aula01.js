function mostrarNome (nome) {
  return console.log('Meu nome é: ' + nome);
}

mostrarNome('Nikolai');
mostrarNome('Tom');

function verificaIdade(idade) {
  if (idade < 18) {
    return console.log('Menor de idade');
  } else {
    return console.log('Maior de idade');
  }
}

verificaIdade(20);
verificaIdade(15);
verificaIdade(18);