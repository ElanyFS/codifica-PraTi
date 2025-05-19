
// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let qtdMaca = Number(prompt("Quantas maçâs deseja comprar?"));

let result;

if (qtdMaca > 0 && qtdMaca < 12) {    
    result = qtdMaca * 0.3;
}else if(qtdMaca >= 12){
    result = qtdMaca * 0.25;
}else {
    result = undefined
}

if (result) {
    console.log('Valor final: ',result);
}else{
    console.log('Não foi possível calcular o valor. Insira novamente');
    
}