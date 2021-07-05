let valores = [0, 1, 7, 4, 2, 9]
/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let localiza = valores.indexOf(3) // procura o número dentro da variável valores.
if (localiza == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${localiza}`)
}