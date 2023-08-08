const frutas = ['banana', 'manga']
console.log(frutas.length)

console.log(frutas.toString()) // banana,manga (transforma em string)

//(mesma coisa que o de cima mas voce escolhe o separador)
console.log(frutas.join(' * ')) // banana * manga 

// remover o ultimo elemento do array
console.log(frutas.pop()) // manga

// adiciona um elemento ao final do array
frutas.push('abacaxi')
console.log(frutas) // [ 'banana', 'abacaxi' ]

frutas.shift() // remove o primeiro elemento do array
console.log(frutas) // [ 'abacaxi' ]

frutas.unshift('morango') // adiciona um elemento no inicio do array
console.log(frutas) // [ 'morango', 'abacaxi' ]