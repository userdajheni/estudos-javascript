function carregar() {
    let msg = document.getElementById('msg')
    let imagem = document.getElementById('imagem')
    
    let data = new Date()
    let hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        imagem.src = 'imgs/morning.jpg'
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18 ) {
        imagem.src = 'imgs/afternoon.jpg'
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = 'imgs/night.jpg'
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        document.body.style.background = '#515154'
    }
}