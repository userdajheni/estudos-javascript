// declaramos array com const
const cars = ['bmw', 'palio', 'volvo']
console.log(cars) // saída:[ 'bmw', 'palio', 'volvo' ]

/*
    SERIA UM ERRO REATRIBUIR VALORES POIS ELA FOI DECLARADA COM CONST, O QUE SIGNIFICA QUE NÃO PODEMOS FAZER O SEGUINTE:
        const cars = ['bmw', 'palio', 'volvo']
        cars = [ 'bmw', 'palio', 'volvo', 'mercedes' ] --> ISSO É UM ERRO!
*/

// você pode atribuir valores usando o método push
cars.push('mercedes')
console.log(cars) // [ 'bmw', 'palio', 'volvo', 'mercedes' ]

// Ou você ainda pode indicar o indice:
cars[4] = "Toyota"
console.log(cars) // [ 'bmw', 'palio', 'volvo', 'mercedes', 'Toyota' ]
