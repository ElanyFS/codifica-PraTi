
// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require("prompt-sync")();

let valor = Number(prompt("Insira o valor: "));

console.log(`Tabuada de ${valor}:`);

for (let index = 1; index <= 10; index++) {
    console.log(`${index} x ${valor} = `, index * valor);
}