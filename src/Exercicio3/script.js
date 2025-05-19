// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let nota = Number(prompt("Insira sua nota: "));

if (nota >= 0 && nota <= 10) {
  if (nota < 7) {
    console.log("ALUNO REPROVADO");
  } else if (nota == 7) {
    console.log("ALUNO EM RECUPERAÇÃO");
  } else {
    console.log("ALUNO APROVADO");
  }
} else {
  console.log("Insira uma nota válida");
}
