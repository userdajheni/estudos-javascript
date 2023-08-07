const Pessoa = {
    nome : 'ana',
    idade : 20,
    endereco : {
        rua : 'Vergueiro',
        cidade : 'São Paulo'
    },
    telefone : '91234-5678',
    anoNascimento : function () {
        // obter ano atual
        let anoAtual = new Date().getFullYear()
        return anoAtual - this.idade
    }
}

console.log(Pessoa)
/* saída:
    nome: 'ana',
    idade: 20,
    endereco: { rua: 'Vergueiro', cidade: 'São Paulo' },
    telefone: '91234-5678',
    anoNascimento: [Function: anoNascimento]
*/


// CLOANDO O OBJETO ACIMA + informações novas
const novoObjeto = Object.assign({
    time : 'Santos Futebol Clube',
    cristao : true
}, Pessoa)
console.log(novoObjeto)

/*
    SAÍDA:

    {
  time: 'Santos Futebol Clube',
  cristao: true,
  nome: 'ana',
  idade: 20,
  endereco: { rua: 'Vergueiro', cidade: 'São Paulo' },
  telefone: '91234-5678',
  anoNascimento: [Function: anoNascimento]
}
*/ 