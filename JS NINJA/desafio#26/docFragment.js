(function() {
    'use strict';

    function afterDomContentLoaded() {
        alert('DOMContentLoaded, \nObserve como todo o documento é carregado antes da imagem.');
        var fragment = document.createDocumentFragment();
        var childP = document.createElement('p');
        var textChildP = document.createTextNode('Texto da tag P!');
    
        childP.appendChild(textChildP);
        fragment.appendChild(childP);
    
        document.body.appendChild(fragment);
    }

    function afterWindowLoad() {
        alert('AfterWindoLoad \nEvento disparado após todo o documento (incluindo imagens e vídeos) forem carregados.')
    }

    document.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
    window.addEventListener('load', afterWindowLoad, false);
    /*
    DOMContentLoaded
        É disparado após todo o documento estar carregado; todas as tags. Não espera por imagens, videos etc...
        Usado em scripts que estão no começo do html, pois o documento é carregado de cima para baixo, assim, evita parar o carregamento da página para carregar os scripts. Más lembre-se que os scripts não devem ser usados no começo por questões de boas práticas.

    window = load
        Espera todo o carregamento. Qualquer coisa, imagens, videos, desde que esse carregamento não seja assincrono, para depois disparar o evento
    */
})();