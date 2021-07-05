var agora = new Date() // Pega do sistema a data completa, com horas e tudo mais. ex: Tue Jun 25 2019 22:39:18 GMT-0300 (GMT-03:00)
var hora = agora.getHours() // Pega somente a hora
var dia = agora.getDay() // paga somente o dia da semana, lembre-se, vai de 0 à 6.
var relogio = agora.toLocaleTimeString('pt-br') // Pega a hora completa, horas, minutos e segundos, marcando PM ou AM.
var configDate = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
var calendario = agora.toLocaleDateString('pt-br', configDate) // Pega a data completa, ex: 2019-6-25, usando a variável configDate, faz a configuração de como essas informaçôes devem serem exibidas.
var fullAno = agora.getFullYear() // Pega somente o ano.
console.log(`a variavel agora contem ${agora}`)
console.log(`a variavel hora contem ${hora}`)
console.log(`a variavel dia contem ${dia}`)
console.log(`a variavel relogio contem ${relogio}`)
console.log(`a variavel calendario contem ${calendario}`)
console.log(`a variavel fullAno contem ${fullAno}`)
if (hora < 5) {
    console.log('Boa madrugada! vai dormi...')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}


/*
var agora = new Date();
var horaAtual = agora.getHours();
var dia = agora.getDay();

// Configurando a exibição da data
var configDate = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

relogio.innerText = agora.toLocaleTimeString('pt-br');

// Exibe o dia de hoje
calendario.innerText = agora.toLocaleDateString('pt-br', configDate);

// Atualiza ano no rodape do site
anoRodape.innerText = agora.getFullYear();

// Segue atualizando a hora chamando a função a cada segundo
setInterval(atualizaHora, 1000);	
*/