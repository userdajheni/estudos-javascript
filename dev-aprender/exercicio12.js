/*
    Crie uma função que exibe a quantidade de * que aquela linha possui
*/

// Nome da função: exibirAsterisco

function exibirAsterisco(linhas) {
    asterisco = ''
    for (let linha = 0; linha < linhas; linha++){
        asterisco = asterisco + '*'
        console.log(asterisco)
    }
}

exibirAsterisco(1)
