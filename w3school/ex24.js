let numbers = [45,4,9,16,25]

// Função para multiplicar os numeros acima por 2 e criar um novo array com estes valores
function novoNumbers(value) {
    return value * 2
}

let numbers2 = numbers.map(novoNumbers)

console.log(`Primeiro array: ${numbers}`)
console.log(`Novo array: ${numbers2}`)

// usando o flatMap()
const meuArray = [1,2,3,4,5]
const meuNovoArray = meuArray.flatMap((x) => x*2)

console.log(meuNovoArray)