(function() {
    'use strict';

    var ajax = new XMLHttpRequest();    // Instânciei o objeto ajax
    //ajax.open('GET', '/data/data.json');   Método 'GET', não tenho url então vou mandar para a própria raiz '/'
    ajax.open('GET', '/data/data.xml');
    ajax.send();    // Não tenho nenhum dado para enviar, então ou deixo vazio ou coloco 'null'

    /*
    ajax.onreadystatechange = function() {}; // Consegue passar apenas um evento

    // OU
    */
    console.log('Carregando...');
    ajax.addEventListener('readystatechange', function() {
        //console.log('Terminou requisição', ajax.readyState, ajax.status);
        if( isRequestOk() ) {
            //var data = JSON.parse(ajax.responseText);
            //console.log('Requisição ok', data.message);
            console.log('Requisição ok', data.responseXML);
        }
    }, false);

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

    /*

    ajax.onreadystatechange - Verifica quando o estado da requisição mudou

    ajax.readyState - Verifica o estado atual
        0: Não enviado
        1: Conexão aberta
        2: Headers recebidos
        3: Carregando corpo do request
        4: Concluído

    ajax.status - Verifica o status http

    ajax.responseText - Tráz a resposta da requisição, em formato de string

    ajax.responseXML - Converte a resposta que vem de um documento XML em um documento

    TRATAMENTO DE ERROS:
    try / catch

    try{} - Tenta executar o código que está dentro

    catch() {} - Se disparar qualquer tipo de erro dentro do try, é mandado para o catch, passando o código como parâmetro. Evitando que o erro dispare no browser do usaário, o que poderia para a execução do código do usuário e/ou não carregar a página por completo

        //throw new Error('Mensagem de erro');
        //throw new SyntaxError('Mensagem de erro');

        try {
            throw new Error('Mensagem de erro');
        }
        catch(e) {
            console.log(e);
        }

    */
})();