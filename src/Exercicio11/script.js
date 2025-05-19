// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
const prompt = require("prompt-sync")();

let numeros = [];

let num;
let count = 0;
let soma = 0;

while (count < 5) {
  num = Number(prompt("Insira um número: "));

  numeros.push(num)
  count++
}

for (let index = 0; index < numeros.length; index++) {
    soma += numeros[index]
}

console.log(`A soma dos números informados é  `, soma);
