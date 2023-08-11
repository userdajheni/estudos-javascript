// O exemplo abaixo localiza o primeiro elemento maior que 18
const numbers = [4,18,19,9,16,25,29]

function findElement(value) {
    return value > 18
}

let first = numbers.find(findElement)
console.log(first) // saída: 19

// A função abaixo localiza o indice do primeiro elemento maior que 18
function findIndiceElement(value) {
    return value > 18
}

let firstIndice = numbers.findIndex(findIndiceElement)
console.log(firstIndice) // saída: 2