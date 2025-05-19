// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require("prompt-sync")();

console.log("|--------------------------------|");
console.log("|              MENU              |");
console.log("|  1 - Mensagem de boas vindas   |");
console.log("|  2 - Somar dois números        |");
console.log("|  0 - Sair                      |");

let opcao = Number(prompt("Escolha uma das opções acima: "));

switch (opcao) {
  case 1:
    console.log("Olá! Bem vindo ao xxxxx");
    break;

  case 2:
    let value1 = Number(prompt("Primeiro valor: "));
    let value2 = Number(prompt("Segundo valor: "));

    console.log(`Soma dos números informados: `, value1 + value2);
    break;

  case 0:
    console.log("Saindo do programa. Até mais!");

    break;

  default:
    console.log("Opção inválida. Escolha novamente.");
    break;
}
