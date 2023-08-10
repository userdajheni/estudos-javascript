const pontos = [40,100,1,5,25,10]
console.log(`Pontos: ${pontos}`)

pontos.sort(function(a,b){return a - b})
console.log(`Coloca em ordem do menor para o maior: ${pontos}`)

pontos.sort(function(a,b){return b - a})
console.log(`Coloca em ordem do maior para o menor: ${pontos}`)