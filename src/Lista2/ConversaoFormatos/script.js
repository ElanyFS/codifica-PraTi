// Escreva duas funções:

// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.

function paresParaObjeto(pares) {
    // Usa reduce para transformar o array de pares em um objeto
    return pares.reduce((obj, [chave, valor]) => {
        obj[chave] = valor; // Define a chave e o valor no objeto
        return obj; // Retorna o objeto atualizado
    }, {}); // Inicializa o acumulador como um objeto vazio
}

function objetoParaPares(obj) {
    // Usa Object.entries para converter o objeto em um array de pares
    return Object.entries(obj); // Retorna o array de pares [ [chave, valor], ... ]
}

// Exemplo de uso
const pares = [['a', 1], ['b', 2], ['c', 3]];
const objeto = paresParaObjeto(pares);
console.log(objeto); // { a: 1, b: 2, c: 3 }
const paresConvertidos = objetoParaPares(objeto);
console.log(paresConvertidos); // [ ['a', 1], ['b',
// 2], ['c', 3] ]
// Testando com outro exemplo
const pares2 = [['x', 10], ['y', 20], ['z',
    30]];


const objeto2 = paresParaObjeto(pares2);
console.log(objeto2); // { x: 10, y: 20, z: 30 }
const paresConvertidos2 = objetoParaPares(objeto2);
console.log(paresConvertidos2); // [ ['x', 10], ['y',
// 20], ['z', 30] ]

