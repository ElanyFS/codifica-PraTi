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

// Exemplo de uso
const vendas = [
    { cliente: 'João', total: 100 },
    { cliente: 'Maria', total: 200 },
    { cliente: 'João', total: 150 },
    { cliente: 'Ana', total: 300 },
    { cliente: 'Maria', total: 50 }
];

const resultado = totalPorCliente(vendas);
console.log(resultado); // { João: 250, Maria: 250, Ana: