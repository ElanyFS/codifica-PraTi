// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    // Verifica se o ano é bissexto
    const isBissexto = (ano) => {
        return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    };

    // Verifica se o mês é válido
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Define o número de dias em cada mês
    const diasPorMes = [31, isBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Verifica se o dia é válido para o mês e ano fornecidos
    if (dia < 1 || dia > diasPorMes[mes - 1]) {
        return false;
    }

    return true;
}

// Exemplo de uso
console.log(ehDataValida(29, 2, 2021)); // true