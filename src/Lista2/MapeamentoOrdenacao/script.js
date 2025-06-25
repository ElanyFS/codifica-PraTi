// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function ordenarProdutosPorPreco(produtos) {
    
    // Ordena o array de produtos por preço crescente
    const produtosOrdem = produtos.sort((a, b) => a.preco - b.preco);
    
    // Usa map para extrair os nomes dos produtos
    const nomes = produtosOrdem.map(produto => produto.nome);

    // Retorna o array de nomes ordenados por preço
    return nomes;
}

// Exemplo de uso
const produtos = [
    { nome: "Produto A", preco: 30 },
    { nome: "Produto B", preco: 20 },
    { nome: "Produto C", preco: 50 }
];

const nomesOrdenados = ordenarProdutosPorPreco(produtos);
console.log(nomesOrdenados); // ["Produto B", "Produto A", "Produto C