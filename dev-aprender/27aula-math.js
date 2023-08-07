// A função math é uma das funções matematicas mais utilizadas em js


// criar numeros aleatorios de zero a 1
let numeroAleatorio = Math.random()
console.log(numeroAleatorio)

// numeros aleatorios entre 5 e 30
function gerarNumerosAleatorios() {
    return Math.floor(Math.random()*25)+5
}

for(let i = 0; i<10; i++){
    console.log(gerarNumerosAleatorios())
}