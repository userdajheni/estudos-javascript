// verificar se TODOS do array são maiores que 18
let numerosArr = [45,4,9,16,25]

function todosMaior(value) {
    return value > 18
}

let saoMaiores = numerosArr.every(todosMaior)
console.log(saoMaiores)

// usando indexOf()
// Este método procura no array um valor especifico e retorna sua posição
const frutas = ['Banana', 'Maça', 'Amora', 'Morango','Kiwi']
let posicao = frutas.indexOf('Banana')
console.log(posicao) // saída 0

let posit = frutas.indexOf('framboesa')
console.log(posit) // saída: -1 significa que não existe no array

let posk = frutas.indexOf('Kiwi')
console.log(`A posição do kiwi é: ${posk}`) // saída: A posição do kiwi é: 4

// lastIndexOf faz o mesmo, porém, retorna a posição da última ocorrência do elemento especificado
let lastPosicao = frutas.lastIndexOf('Morango')
console.log(lastPosicao) // saída: 3