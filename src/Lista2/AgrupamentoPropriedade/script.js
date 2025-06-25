// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

function totalPorCliente(vendas) {      
    // Usa reduce para acumular os totais por cliente
    return vendas.reduce((acc, venda) => {
        // Se o cliente já existe no acumulador, soma o total
        if (acc[venda.cliente]) {
            acc[venda.cliente] += venda.total;
        } else {
            // Caso contrário, inicializa com o total da venda
            acc[venda.cliente] = venda.total;
        }
        return acc; // Retorna o acumulador atualizado
    }, {}); // Inicializa o acumulador como um objeto vazio
}