// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')();

let value = Number(prompt('Insira um número: '));

if (value % 2 == 0) {
    console.log('O número informado é par');
}else{
    console.log('O número informado é impar');
}