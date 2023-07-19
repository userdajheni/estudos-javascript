function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('ano')
    let res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        let sexo = document.getElementsByName('sexo')
        let idade = ano - fano.value
        // criação do genero
        let genero = ''
        // criar imagem
        let img = document.createElement('img')
        // atribuir um id à imagem
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            
            // validacao para determinar qual imagem vai aparecer
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imgs/baby_boy.jpg')
            } else if (idade > 3 && idade < 12) {
                img.setAttribute('src', 'imgs/crianca_boy.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/teen_boy.jpg')
            } else if (idade < 60){
                img.setAttribute('src', 'imgs/adult_man.jpg')
            } else {
                img.setAttribute('src', 'imgs/idoso.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'

            // validacao para determinar qual imagem vai aparecer
            if (idade >= 0 && idade <= 3) {
                img.setAttribute('src', 'imgs/baby_girl.jpg')
            } else if (idade > 3 && idade < 12) {
                img.setAttribute('src', 'imgs/crianca_girl.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/teen_girl.jpg')
            } else if (idade < 60){
                img.setAttribute('src', 'imgs/adult_woman.jpg')
            } else {
                img.setAttribute('src', 'imgs/idosa.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}