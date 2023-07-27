let texto = 'O senhor é meu pastor e de nada terei falta'

/* retorna o índice (posição). Se o elemento especificado não for encontrado, o script retorna -1
Ele também difere maiuscula de minuscula. */
console.log(`Mostrando a posição da palavras pastor: ${texto.indexOf('pastor')}`)

// retorna o índice da última ocorrência de um texto especificado em uma string
console.log(`Mostrando a posição de terei: ${texto.indexOf('terei')}`)

/* Amobos os parametros acima aceitam um segundo argumento, como posição inicial para pesquisa.
Exemplo, retorne a posição de nada começando a partir da posição 7: */
console.log(`Mostrando a posição de nada, a partir da posição 7: ${texto.indexOf('terei',20)}`)

/* procura uma string por uma string (ou uma expressão regular) e retorna a posição
O que diferente este do indexOf, é que o método search não pode receber um segundo argumento de posição inicial.*/
console.log(`Mostrando a posição da string pastor: ${texto.search('pastor')}`)

// retorna true se o termo passado estiver na string e false se não estiver. Este método diferencia diferencia maiúsculas de minúsculas.
console.log(`A palavra 'meu' tem na string?: ${texto.includes('meu')}`)
console.log(`A palavra 'igreja' tem na string?: ${texto.includes('igreja')}`)

// retorna true se uma string começa com um valor especificado. Ele aceita um segundo argumento como parametro para iniciar a pesquisa e diferencia maiúsculas de minúsculas.
console.log(`Esta string começa com 'Amados'?: ${texto.startsWith('Amados')}`)
console.log(`Esta string começa com 'O'?: ${texto.startsWith('O')}`)

// retorna true se uma string termina com o valor especificado.
console.log(`Esta string termina com 'Amados'?: ${texto.startsWith('Amados')}`)
console.log(`Esta string termina com 'falta'?: ${texto.startsWith('falta')}`)