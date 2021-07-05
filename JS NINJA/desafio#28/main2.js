(function() {
    'use strict';

    var ajax = new XMLHttpRequest();
    ajax.open('GET', '/data/data.xml');
    ajax.send();

    console.log('Carregando...');
    var response = '';
    ajax.addEventListener('readystatechange', function() {
        if( isRequestOk() ) {
            try {
                response = JSON.parse(ajax.responseText);
            }
            catch(e) {
                response = ajax.responseText;
            }
            console.log(response);
        }
    }, false);

    function isRequestOk() {
        return ajax.readyState === 4 && ajax.status === 200;
    }

        
})();