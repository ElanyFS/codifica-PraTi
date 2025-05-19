// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

let numero = Number(prompt("Informe um valor: "));

while (numero !== 0) {
  soma += numero;
  numero = Number(prompt("Informe outro valor: "));
  contador++;
}

console.log(`Média dos números: `, soma / contador);
