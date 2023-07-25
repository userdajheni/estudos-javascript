// criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto 

let filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Tor',
    quant_trabalhos: 100
}

exibirPropriedades(filme)

function exibirPropriedades(obj){
    for (prop in obj) {
        if (typeof obj[prop] == 'string') {
            console.log(prop, obj[prop])
        }
    }
}
