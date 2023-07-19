/*
    obter a media a partir de um array

    0 - 59 F
    60 - 69 D
    70 - 79 C
    80 - 89 D
    90 - 100 A
*/

let notas = [60, 60, 80]

console.log(mediaAluno(notas))

function mediaAluno(notas) {
    let soma = 0
    for (let nota of notas) {
        soma = soma + nota
    }

    let media = soma / (notas.length)

    if (media < 59) return 'F'
    if (media < 69) return 'D'
    if (media < 79) return 'C'
    if (media < 89) return 'B'
    if (media >= 90) return 'A'
}