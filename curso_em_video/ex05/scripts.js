let num = document.querySelector('input#numero')
let lista = document.getElementById('lista')
let res = document.querySelector('div#resultado')
let valores = []

// função para verificar se é numero
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { return false }
}

// função para verificar se o numero já está na lista (l = lista)
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { return false }
}

// função para adicionar os valores digitados na lista
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('Valor invalido ou já adicionado na lista')
    }

    num.value = ''
    num.focus()
}

// função para realizar calculos
function calcular() {
    if(valores.length == 0) {
        alert('Adicione valores antes de calcular')
    } else {
        let totalElemento = valores.length
        let maiorNumero = valores[0]
        let menorNumero = valores[0]
        let soma = 0
        let media = 0

        
        for(let pos in valores) {
            // analisa qual numero é maior e qual é o menor
            if(valores[pos] > maiorNumero)
                maiorNumero = valores[pos]
            if(valores[pos] < menorNumero) 
                menorNumero = valores[pos]
            
            // soma os valores
            soma += valores[pos]

            // calcula a média
            media = soma / totalElemento
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${totalElemento} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menorNumero}</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maiorNumero}</p>`
        res.innerHTML += `<p>A soma entre todos os valores adicionado é: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores adicionados é: ${media}</p>`
    }
}