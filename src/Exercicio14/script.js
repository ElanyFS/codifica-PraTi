// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let valor = Number(prompt("Insira o valor: "));

let fatorial = 1;

for (let index = valor; index >= 1; index--) {
  fatorial *= index;
}

console.log(`Fatorial do número ${valor}: ${fatorial}`);
