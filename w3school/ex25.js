// usando filter() - cria um novo array com numeros maiores que 18
let numbers = [45,4,9,16,25]

function maior18(value) {
    return value > 18
}

let numMaior18 = numbers.filter(maior18)

console.log(numMaior18)

// usando reduce() - cria um novo array reduzido somando os valores
let numeros = [45,4,9,16,25]

function reduzirArray(total, value) {
    return total + value
}

let numerosRed = numeros.reduce(reduzirArray)
console.log(numerosRed)