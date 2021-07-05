(function() {
    'use strict';

    /*

    .parentNode - Nó pai do Elemento
        Ex:
        var myVar = document.querySelector('#filho');
        console.log( myVar.parentNode )

    .childNodes - Todos os nós que são filhos

    .firstChild - O primeiro filho

    .lastChild - O último filho

    .nextSibling - O próximo irmão

    .previousSibling - O irmão prévio

    .nodeType - Mostra o tipo de nó (em números)
        1- Elementos html, tags
        3- Text
        8- Comments
        11- documentFragment

    nodeValue - Conteúdo textual de Text e comment

    .nodeName - Nome do nó

            SUPORTE DE FEATURES NOS BROWSERS
            http://caniuse.com

    PROPRIEDADES:

    .children - Traz somente nós html, sem nós de textos e nós de comentários.

    .firstElementChild - Primeiro filho que é elemento

    .lastElementChild - Último filho que é elemento

    .nextElementSibling - Próximo elemento que é irmão

    .previousElementSibling - Elemento anterior que é irmão

    .childElementCount - Qual a quantidade de filhos tem o elemento
        .children.length - A mesma coisa

    MÉTODOS:

    .hasAttribute(name) - Se o elemento tem o atributo expecífico, boleano

    .hasAttributes() - Verifica se o elemento tem algum atributo, boleano

    .appendChild(child) - Adiciona um filho em algum elemento, no final dele

    .insertBefore(node, beforeWhom) - Insere antes, os parâmetros são: o nó que será inserido e antes de quem

    .cloneNode(boolean) - Clona um nó já existente, o boleano pergunta se quer copiar o conteúdo desse elemento

    .hasChildNodes() - Verifica se o elemento tem algum nó filho

    .removeChild(child) - Remove um filho

    .replaceChild(new, old) - Substitui um filho passando por parâmetros o novo e o velho

    MÉTODOS DE DOCUMENT:

    document.createTextNode(text) - Cria um nó de texto, é um método de document

    document.createElement(tagName) - Você passa a tag e ele cria um novo elemento para você

    ATRIBUTOS html válidos:
    São getter e setter

    element.id - Paga o id do elemento

    element.value - Pega o value do elemento

    element.className - Paga o nome da classe do elemento

    element.href (para links) - Pega o href do elemento

    element.title - Pega o title do elemento

    element.src - Pega o src do elemento, para imagens ou tags de scripts

    Qualquer atributo html:

    .getAttribute(attr) - Pega qualquer tipo de atributo, retorna sempre string

    .setAttribute(attr, value) - Pode criar um atributo novo ou modificar um existente

    Manipular com performance:

    document.createDocumentFragment() - 
        Serve para manipular os elementos do DOM com performance, cria um fragmento do documento para depois incluir no html de uma vez.
        É como se fosse um documento em branco, assim não tem parentNode. 
        .parentNode === null

    */
   
})();