let num = [5, 2, 8]

console.log(`Nosso vetor, ou arrya, ${num}`)

num[3] = 9 // ADICIONA O 9 NA POSIÇÃO 3
console.log(num)

num.push(7) // ADICIONA UM ELEMENTO, NÃO PRECISO SABER A POSIÇÃO, ELE SERÁ ADICIONADO NO ÚLTIMO
console.log(num)

//num.length - SABER O TAMANHO

num.sort() // PEGA TODOS OS ELEMENTOS É POE NA ORDEM CRESCENTE
console.log(num)

console.log(`O vetor tem ${num.length} posições`) // TAMANHO

console.log(`O primeiro elemento do vetor é : ${num[0]}`) // MOSTRAR UM ELEMENTO EXPECÍFICO

// ABAIXO, O JEITO MAIS TRADICIONAL, CHAMADO:  PERCURSO PARA EXIBIÇÃO NO VETOR
for(var c = 0; c < num.length; c++) { // MOSTRAR TODOS OS ELEMENTOS SEM A FORMATAÇÃO PADRÃO
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
// HÁ UM JEITO MAIS SIMPLIFICADO, À PARTIR DAS VERSÕES MAIS RECENTES DO ECMA SCRIPT

for(var c in num) {
    console.log(num[c])
}
/*
se lê: Para cada posição DENTRO DE num. faça...
ou
se lê: Para cada posição EM num. faça...
for - se lê PARA
in - se lê DENTRO ou EM
*/

num.indexOf(7) // PROCURA UM VALOR DENTRO DO VETOR, ELE RETORNA A CHAVE ONDE ESTE VALOR SE ENCONTRA. SE O VALOR NÃO EXISTIR ELE RETORNA -1