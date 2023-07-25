function tabuada() {
    let num = document.getElementById('num')
    let tabuada = document.getElementById('tabuada')

    let numero = Number(num.value)

    tabuada.innerHTML = ''
    for(let cont = 0; cont <= 10; cont++){
        tabuada.innerHTML += `${numero} X ${cont} = ${numero*cont} <br><br>`
    }

}