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

// Para acessar digite o nome do objeto.Propriedade:
console.log(celular.capacidadeBateria)
console.log(celular.ligar)
console.log(celular.ligar())