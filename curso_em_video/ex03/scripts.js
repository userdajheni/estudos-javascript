function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro! Faltam dados.')
    } else {
       res.innerHTML = 'Contando: '

       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)

       if (i < f){
        for(let cont = i; cont <= f; cont += p)
            res.innerHTML += `${cont} - `
       } else {
        for(let cont = i; cont >= f; cont -= p)
            res.innerHTML += `${cont} - `
       }
       res.innerHTML += '\u{1f3c1}'
    }
}