function verificar() {
    var corpo = window.document.getElementById('corpoCentro')
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex') //[0] e [1] mas e fem
    if (fano.value == 0 || fano.value.length == 0 ) { //fano.value.length == 0 - comprimento zero, não digitou nada. fano.value == 0 - se valor digitado for zero.
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else if (Number(fano.value) > ano) { // Funcionaria mesmo sem a conversão!
        window.alert('Oxe! Você veio do futuro?')
    } else if (document.getElementById('mas').checked == false && document.getElementById('fem').checked == false) {
        res.innerHTML = 'Selecione o sexo, por favor.'
    } else {
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') // criei dinamicamente uma tag no html usando js
        img.setAttribute('id', 'foto') // dei um id para img com nome foto. <img id="foto"></img>
        img.style.paddingTop = '20px'
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'fotoBebeMenino.png')
                gênero = 'um Bebê'
                corpo.style.background = '#c8b79f'
            } else if (idade < 10) {
                // Criança
                img.setAttribute('src', 'fotoCriancaMenino.png')
                gênero = 'uma Criança'
                corpo.style.background = '#cdfa71'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotoJovemMenino.png')
                gênero = 'um Jovem'
                corpo.style.background = '#e8e8e8'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoAdulto.png')
                gênero = 'um Adulto'
                corpo.style.background = '#aeb1b6'
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', 'fotoIdoso.png')
                gênero = 'um Idoso'
                corpo.style.background = '#897e67'
            } else if (idade < 300) {
                // Esqueleto
                img.setAttribute('src', 'fotoEsqueleto.png')
                gênero = 'um Defunto'
                corpo.style.background = '#777776'
            } else {
                // Pó
                img.setAttribute('src', 'fotoFumaca.png')
                gênero = 'um Defunto a muito tempo'
                //corpo.style.background = '#4b4b4b'
            } // NÃO VAI APARECER SÓ COM ESSAS LINHAS DE CÓDIGO PQ NÃO MANDEI APARECER AINDA
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'fotoBebeMenina.png')
                gênero = 'uma Bebê'
                corpo.style.background = '#e1c7c6'
            } else if (idade < 10) {
                // Criança
                img.setAttribute('src', 'fotoCriancaMenina.png')
                gênero = 'uma Criança'
                corpo.style.background = '#efab81'
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotoJovemMenina.png')
                gênero = 'uma Jovem'
                corpo.style.background = '#b67a47'
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoAdulta.png')
                gênero = 'uma Adulta'
                corpo.style.background = '#9e9693'
            } else if (idade < 100) {
                // Idoso
                img.setAttribute('src', 'fotoIdosa.png')
                gênero = 'uma Idosa'
                corpo.style.background = '#8f6d14'
            } else if (idade < 300) {
                // Esqueleto
                img.setAttribute('src', 'fotoEsqueleto.png')
                gênero = 'um Defunto'
                corpo.style.background = '#777776'
            } else {
                // Pó
                img.setAttribute('src', 'fotoFumaca.png')
                gênero = 'um Defunto a muito tempo'
                corpo.style.background = '#4b4b4b'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // adiciona o elemento
    }
}