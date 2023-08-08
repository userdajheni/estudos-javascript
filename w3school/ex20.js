const meninas = ['pamela', 'milena', 'ariane', 'leticia']
const meninos = ['pedro', 'tiago', 'joao']

// concatenar strings
const todosJuntos = meninas.concat(meninos)
console.log(todosJuntos)

/*
    SAÍDA:
    [
        'pamela', 'milena',
        'ariane', 'leticia',
        'pedro',  'tiago',
        'joao'
    ]
*/

const numerais = [[1,2], [3,4], [5,6]] // saída: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(numerais)

const novoNumerais = numerais.flat()
console.log(novoNumerais) // saída: [ 1, 2, 3, 4, 5, 6 ]

const frutas = ['morango', 'abacaxi']
frutas.splice(1,0,'limao', 'kiwi', 'manga', 'banana')
console.log(frutas) //[ 'morango', 'limao', 'kiwi', 'manga', 'banana', 'abacaxi' ]

const citrus = frutas.slice(3)
console.log(citrus) // [ 'manga', 'banana', 'abacaxi' ]

const amoeba = frutas.slice(1,4)
console.log(amoeba) // [ 'limao', 'kiwi', 'manga' ]