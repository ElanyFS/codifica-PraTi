// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

function ordenarProdutosPorPreco(produtos) {
    // Usa map para extrair os nomes dos produtos
    const nomes = produtos.map(produto => produto.nome);

    // Ordena o array de produtos por preço crescente
    produtos.sort((a, b) => a.preco - b.preco);

    // Retorna o array de nomes ordenados por preço
    return nomes;
}