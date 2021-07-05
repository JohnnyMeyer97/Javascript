var idade = 11
/* if (idade < 16) {
    console.log('Não vota') // como estamos usando o node.js e não o navegador, não usa-se document.write...
} else {
    if (idade < 18) {
        console.log('Voto opcional')
    }
} */

// OU MAIS SIMPLIFACADO
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) { // Opite por essa maneira
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

/* Nem precisa por que já é obvio...
} else if (idade >= 18) {
    console.log('Voto obrigatório')
}
*/