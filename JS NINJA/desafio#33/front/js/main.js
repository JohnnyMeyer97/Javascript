(function() {
    'use strict';
    
    var ajax = new XMLHttpRequest();
    ajax.open('POST', 'http://localhost:3000/user'); //endereço do server backend
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.send('username=johnny&user=Johnny&age=23'); // req do servidor

    console.log('Cadastrando usuário...');
    ajax.onreadystatechange = function() {
        if(ajax.readyState === 4) {
            console.log('Usuário cadastrado!', ajax.responseText); //responseText = res do servidor
        }
    };

    var get = new XMLHttpRequest();
    get.open('GET', 'http://localhost:3000/user/johnny'); //endereço do server backend
    get.send();

    get.onreadystatechange = function() {
        if(get.readyState === 4) {
            console.log(JSON.parse(get.responseText)); //responseText = res do servidor
        }
    };
})();