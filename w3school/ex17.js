let x = 123
console.log(`A variavel x é do tipo: ${typeof(x)}`)
console.log(`Agora a variavel x é do tipo: ${typeof(x.toString())}`)

let num = 9.87043
console.log(`A variavel num tem valor: ${num}`)
console.log(`Com método esponencial fica: ${num.toExponential(2)}`)
console.log(`O valor da variavel x com 2 casas decimais: ${num.toFixed(2)}`)
console.log(`O valor da variavel x com 3 casas decimais: ${num.toFixed(3)}`)
console.log(`O valor da variavel x com tamanho de 2 caracteres: ${num.toPrecision(2)}`)
console.log(`O valor da variavel x com tamanho de 10 caracteres: ${num.toPrecision(10)}`)


let a = '123' // tipo string
console.log(typeof(a))
console.log(typeof(parseInt(a))) // transforma em int
console.log(typeof(parseFloat(a))) // transforma em float