let ranks = ['A', 'B', 'C']

for(let i = 0; i < ranks.length; i++){
    console.log(ranks[i])
}

ranks.forEach(function(i){
    console.log(`Usando forEach: ${i}`)
})

// testando some()
const numbers123 = [45, 4, 9, 16, 25];
let someOver18 = numbers123.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 

console.log(someOver18)