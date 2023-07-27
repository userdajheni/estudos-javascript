let texto = " Apple,  Banana,  Kiwi,  Apple,  Apple,  Banana"
let frase = 'são frutas deliciosas'
let text = '5'

console.log(`O texto tem ${texto.length} caracteres`) // retorna o comprimento de uma string

//extrai uma parte de uma string e retorna a parte extraída em uma nova string.
console.log(`Estraindo a string: ${texto.slice()}`)

console.log(`Usando slice: ${texto.slice(7)}`) // pulando 7 caracteres

//Corta uma parte da posição 7 para a posição 13
console.log(`Usando slice: ${texto.slice(7,13)}`)

//Se um parâmetro for negativo, a posição é contada a partir do final da string
console.log(`Usando slice: ${texto.slice(-7)}`)

console.log(`Usando substring: ${texto.substring(3)}`) // mesma coisa que slice
console.log(`Usando substr: ${texto.substr(4)}`) // mesma coisa que slice

// altera a palavra Apple para maçã
console.log(`Usando replace: ${texto.replace('Apple', 'maçã')}`)  
console.log(`Usando replaceAll: ${texto.replaceAll('Apple', 'maçã')}`)

console.log(`Usando toUpperCase() ${texto.toUpperCase()}`) // torna maiusculo
console.log(`Usando toLowerCase()  ${texto.toLowerCase() }`) // torna minusculo

console.log(`Usando concat()  ${texto.concat(" ", frase) }`) // concatena com outras strings

console.log(`Usando trim()  ${texto.trim() }`) // remove espaço em branco entre a string
console.log(`Usando trimStart()  ${texto.trimStart() }`) // remove espaço em branco do inicio
console.log(`Usando trimEnd()  ${texto.trimEnd() }`) // remove espaço em branco do fim

// preenche uma string desde o inicio. Vai preencher com 0 até atingir tamanho 4
console.log(`Usando padStart()  ${text.padStart(4,"0") }`) 
console.log(`Usando padEnd()  ${texto.padEnd(4,"x") }`) // preenche no final

// retorna o caractere em um índice especificado (posição)
console.log(`Usando charAt() para mostrar o caractere da posição 9 ${texto.charAt(9) }`)

// retorna o unicode em um índice especificado (posição)
console.log(`Usando charCodeAt() para mostrar o unicode da posição 9 ${texto.charCodeAt() }`)

// converte uma string para um array
console.log(`Usando split()  ${texto.split() }`)