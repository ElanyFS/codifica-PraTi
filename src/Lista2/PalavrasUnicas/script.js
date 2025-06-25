// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function palavrasUnicas(frase) {

    // Divide a frase em palavras usando espaço como delimitador
    const palavras = frase.split(" ");
    
    // Cria um array para armazenar as palavras únicas
    const unicas = [];
    
    // Percorre cada palavra na frase
    for (let i = 0; i < palavras.length; i++) {
        const palavra = palavras[i];
        
        // Verifica se a palavra já está no array de únicas
        if (!unicas.includes(palavra)) {
            unicas.push(palavra); // Adiciona a palavra se não estiver presente
        }
    }
    
    return unicas; // Retorna o array de palavras únicas
}

// Exemplo de uso
const frase = "olá olá mundo mundo";
const resultado = palavrasUnicas(frase);
console.log(resultado);