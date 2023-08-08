let frutas = ['banana', 'maçã', 'abacaxi', 'morango', 'uva'] // isso é um array

// Os indices começam no zero
console.log(frutas)
console.log(frutas[2]) // retorna abacaxi
console.log(frutas.length) // retorna 5
console.log(frutas.length-1) // retorna o indice do ultimo elemento da matriz
console.log(frutas.sort()) // coloca em ordem alfabetica

let numbers = [1,2,3,4,5,7,6,8,9,0,2,4,3,22,5,6,45,789]
// i começa com 0. Enquanto i for maior que o tamanho do array, ascrente +1
for (let i = 0; i < numbers.length; i++ ) {
    console.log(numbers[i]) // retorne o item
}

let numeros = [10,1,9,2,8,3,7,6,4,5]
numeros.forEach(function(x) {
    console.log(x)
})

/*
    Simplificando o código acima
    numeros.forEach(x => console.log(x))
*/

let carro = ['palio', 'fox', 'toro']
console.log(carro) // [ 'palio', 'fox', 'toro' ]
console.log(carro[0]) // palio
console.log(carro[1]) // fox
console.log(carro[2]) // toro
console.log(carro[3]) // undefined

carro[1] = 'BMW'
carro[3] = 'fox'
console.log(carro) // [ 'palio', 'BMW', 'toro', 'fox' ]
console.log(carro.sort()) // [ 'BMW', 'fox', 'palio', 'toro' ] ordem alfabetica