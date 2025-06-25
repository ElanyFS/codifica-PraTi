// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeoutId;

    return function(...args) {
        // Limpa o timeout anterior, se houver
        clearTimeout(timeoutId);

        // Define um novo timeout para chamar a função após o delay
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Exemplo de uso
const logMessage = (message) => {
    console.log(message);
};

const debouncedLogMessage = debounce(logMessage, 2000);

// Testando a função debounce
debouncedLogMessage("Mensagem 1"); // Não será exibida imediatamente

