const celular = {
    marcaCelular: 'Samsung',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação...')
    }
}

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        // marcaCelular: marcaCelular,
        // tamanhoTela: tamanhoTela,
        // capacidadeBateria: capacidadeBateria,
        // ligar: function(){
        //     console.log('Fazendo ligação...')
        // } 

        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log('Fazendo ligação...')
        } 
    }
}

let celular1 = criarCelular('Zenfone', 5.5, 5000)
console.log(celular1)

let celular2 = criarCelular('xiaomi', 7.8, 6000)
console.log(celular2)