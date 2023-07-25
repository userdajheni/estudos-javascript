// escreva uma função que usa 2 numero e retorna o maior entre eles

/* let A = 5
let B = 18

if (A > B){
    console.log(`O maior número é ${A}`)
} else {
    console.log(`O maior número é ${B}`)
}

OU

function max(num1, num2){
    if(num1 > num2)
        return num1
    else if(num1 == num2)
        return 'Os numeros são iguais'
    else
        return num2
}

*/

let valorMaior = max(10,100)
console.log(valorMaior)

function max(num1, num2){
    return num1 > num2 ? num1 : num2
}
