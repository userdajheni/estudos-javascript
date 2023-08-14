const dataHoje = new Date()
console.log(dataHoje) // saída: 2023-08-11 T15:10:04.149Z (data do sistema)

let dia = dataHoje.getDate()
console.log(`Hoje é dia ${dia}`) // saída: Hoje é dia 11

let day = dataHoje.getDay()
console.log(day) // saída: 5 (sexta feira)

let ano = dataHoje.getFullYear()
console.log(`Estamos no ano ${ano}`) // saída: Estamos no ano 2023

/*
    JavaScript conta meses de 0 a 11 :
    Janeiro = 0 .
    Dezembro = 11
*/
let mes = dataHoje.getMonth()
console.log(`Estamos no mês ${mes}`) // saída: Estamos no mês 7 (agosto)

let horas = dataHoje.getHours()
console.log(`Agora são ${horas} horas`) // Agora são 12 horas

let minutos = dataHoje.getMinutes()
console.log(`E ${minutos} minutos`) // saída: E 19 minutos

let segundos = dataHoje.getSeconds()
console.log(`E ${segundos} segundos`) // saída: E 7 segundos

let milisegundos = dataHoje.getMilliseconds()
console.log(`E ${milisegundos} mili segundos`) // saída: E 658 mili segundos

let time = dataHoje.getTime()
console.log(time) // 1691768753104