// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.
const prompt = require('prompt-sync')();

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;
let tentativas = 0;
do {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));
    tentativas++;

    if (palpite < numeroAleatorio) {
        console.log("Mais alto!");
    } else if (palpite > numeroAleatorio) {
        console.log("Mais baixo!");
    } else {
        console.log(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
    }
}while (palpite !== numeroAleatorio);

// Exibe o número de tentativas no final
console.log(`Você fez ${tentativas} tentativas.`);
