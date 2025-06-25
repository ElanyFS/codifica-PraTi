// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n) {
    // Verifica se n é negativo e lança um erro
    if (n < 0) {
        throw new Error("O fatorial não está definido para números negativos.");
    }
    
    // Caso base: fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }
    
    // Chamada recursiva: n * fatorial(n - 1)
    return n * fatorial(n - 1);
}