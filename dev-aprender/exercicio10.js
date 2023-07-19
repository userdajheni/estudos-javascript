/*
    Criar função somar que retorna a soma de todos os multiplos de 3 e 5
*/

somar(10)

function somar(limite) {
    let mult3 = 0
    let mult5 = 0

    for (i = 0; i <= limite; i++){
        if (i % 3 === 0) {
            mult3 = mult3 + i
        } else if (i % 5 === 0) {
            mult5 = mult5 + i
        }
    }

    let soma = mult3 + mult3
    console.log(soma)
}