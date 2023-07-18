let idade = 58
if (idade < 18) {
    console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}

if (idade >= 16 && idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else if (idade >= 18){
    console.log('Voto obrigatório')
} else {
    console.log('Não vota')
}