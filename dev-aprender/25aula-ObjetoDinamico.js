const mouse = {
    cor : 'red',
    marca : 'dazz'
}

console.log(mouse) // saída: { cor: 'red', marca: 'dazz' }

// Adicionando propriedade dinamicamente
mouse.velocidade = 5000

console.log(mouse) // saída: { cor: 'red', marca: 'dazz', velocidade: 5000 }

// Adicionando um método
mouse.trocarVelocidade = function () {
    console.log('Mudando DPI (velocidade)')
}

console.log(mouse)
/*
 Saída:
    {
    cor: 'red',
    marca: 'dazz',
    velocidade: 5000,
    trocarVelocidade: [Function (anonymous)]
    }
*/

// deletando método
delete mouse.trocarVelocidade

console.log(mouse) // saída: { cor: 'red', marca: 'dazz', velocidade: 5000 }