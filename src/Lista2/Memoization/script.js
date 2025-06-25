// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    const cache = new Map();

    return function(...args) {
        // Cria uma chave única para os argumentos
        const key = JSON.stringify(args);

        // Verifica se o resultado já está no cache
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Chama a função original e armazena o resultado no cache
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Exemplo de uso
function fatorial(n) {
    if (n < 0) {
        throw new Error("O fatorial não está definido para números negativos.");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

const memoizedFatorial = memoize(fatorial);
console.log(memoizedFatorial(5)); // 120