// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
const prompt = require("prompt-sync")();

let valor1 = Number(prompt("Primeiro valor: "));
let valor2 = Number(prompt("Segundo valor: "));

function order(valor1, valor2) {
  if (valor1 < valor2) {
    return `${valor1} - ${valor2}`;
  }
  {
    return `${valor2} - ${valor1}`;
  }
}

if (valor1 != valor2) {
  console.log('Valores em ordem crescente: ',order(valor1, valor2));
} else {
  console.log("Insira valores diferentes");
}
