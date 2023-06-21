const pessoa = {
    nome: "Amanda",
    idade: 25,
    peso: 85.6,
    altura: 165,
    trabalha: true
}

for (let chaves in pessoa) {
    // console.log(chaves); saída: nome, idade, peso, altura e trabalha
    // console.log(chaves, pessoa.nome); saída: nome amanda, idade amanda, peso amanda
    console.log(chaves, pessoa[chaves]); // vou imprimir a chave e o valor de chave
}


const cores = ['vermelho', 'azul', 'verde'];

for(let indice in cores){
    console.log(indice); // saída: 0, 1, 2
    console.log(indice, cores[indice]);
}