// Medidor de velocidade
// A cada 5km acima do limite você recebe 1 ponto na CNH
// Use a função math.Floor() para arredondar os valores
// Caso os pontos seja maior que 12 a CNH é suspensa

verificarVelocidade(133) // aqui estou chamando a função passando para ela um paramentro 70

function verificarVelocidade(velocidade){
    let velMax = 70
    let kmAcima = velocidade - velMax
    let pontosCNH = Math.floor((velocidade - velMax) / 5)

    if (velocidade <= velMax)
        console.log('Ok, você está dentro do limite permitido!')
    else
        console.log(`Você está ${kmAcima} km acima do limite. Recebeu ${pontosCNH} pontos na carteira`)
        if (pontosCNH >= 12)
            console.log('Sua habilitação ultrapassou os 12 pontos. CNH Suspensa!')
}
