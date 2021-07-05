let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // checa se o número passado está dentro dos limites.
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) { // verifica se é um número e se ele já existe no array
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // vazio
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = valores.length
        let maior = valores[0] // Ao iniciar, o maior e o menor número até o momento é o primeiro a ser adicionado.
        let menor = valores[0]
        let soma = 0 // começa com zero
        let media = 0 // começa com zero
        for(let pos in valores) {
            soma += valores[pos] // recebe e vai somando o próximo.
            if (valores[pos] > maior) 
                maior = valores[pos]
            if(valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = '' // vazio
        res.innerHTML = `<p>Ao todo temos ${tot} valores cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi: ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi: ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`

    }
}