function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('selTab')
    if (num.value.length == 0){ // se estiver vazio
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10 ) { // tabuada que multiplica até o 10
            let item = document.createElement('option') // cria um elemento
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}` // adiciona o value na tag option, não faz sentido para o JavaScript mas sim para outras linguagens. ex (<option value="tab1"></option>)
            tab.appendChild(item) // Adicionar um elemento filho dentro do select
            c++
        }
    }
    
}