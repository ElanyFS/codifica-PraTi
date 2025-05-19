// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
const prompt = require("prompt-sync")();

console.log("Índice de Massa Corporal (IMC)");
console.log(
  "Insira seu peso em quilogramas e sua altura em centímetros. Por exemplo: 70 kg e 170 cm (que equivale a 1,70 m)"
);

let peso = Number(prompt("Peso: "));
let altura = Number(prompt("Altura: "));

let formatALtura = ((altura/100) * (altura/100)).toFixed(2)
let imc = peso / formatALtura;

if (peso <= 0 || altura <= 0) {
  console.log("Dados inválidos.");
} else {
  if (imc < 18.5) {
    console.log("Abaixo do peso");
  } else if ((imc >= 18.5) & (imc <= 24.9)) {
    console.log("Peso ideal");
  } else if ((imc >= 25) & (imc <= 29.9)) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidade");
  }
}
