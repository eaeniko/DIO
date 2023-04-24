
// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;
const notaMedia = (nota1 + nota2 + nota3) / 3;


if (notaMedia < 5) {
  console.log("Reprovado");
  
} else if (notaMedia >= 5 && notaMedia <= 7) {
  console.log('Recuperação');
} else {
  console.log('Aprovado');
}