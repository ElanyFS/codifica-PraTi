// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

function fibonnaci() {
  let a = 0;
  let b = 1;
  let temp;
  console.log(a);
  console.log(b);

  for (let index = 3; index <= 10; index++) {
    temp = a + b;
    console.log(temp);

    a = b;
    b = temp;
  }
}

fibonnaci();
