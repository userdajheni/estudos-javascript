/*
    Crie uma função para mostrar os numeros primos.
    Lembre-se: Números primos são aqueles divisíveis apenas por 1 e por eles mesmos. 
*/

// nome da função: exibirNumeroPrimmos

function exibirNumeroPrimmos(limite){
    for (let numero = 2; numero <= limite; numero++){
        let ePrimo = true;

        for(let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                ePrimo = false
                break
            } 
        }

        if(ePrimo) console.log(numero)
    }
}

exibirNumeroPrimmos(15)