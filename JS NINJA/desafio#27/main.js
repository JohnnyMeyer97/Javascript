(function() {
    'use strict';
    /* TECNICAS NINJA */

    /* COPIAR ARRAYS */
    var arr = [1, 2, 3, 4, 5];
    /*
    var arr2 = arr.map(function(item) {
        return item;
    }); 
        Ou copia usando slice sem passar parâmetros
    */
    var arr2 = arr.slice();
    console.log(arr, arr2, arr === arr2);

    /* Funciona com elementos do DOM também */

    var $divs = document.querySelectorAll('div');
    var $divsCopy = Array.prototype.slice.call($divs);

    console.log($divs, $divsCopy, $divs === $divsCopy);

    /* SABER O TIPO DE DADO REAL 

        Object.prototype.toString

        Lembre-se que o typeof deve ser usado para tipos primitivos no JS
    */

    var arrayTest = [1, 2, 3];
    var objectTest = {};
    function myFunc() {
        console.log('Usando dentro da function com os arguments', Object.prototype.toString.call(arguments) );
    }
    myFunc();

    console.log( 'Usando typeof:', typeof arrayTest );
    console.log( 'Usando Object.prototype.toString', Object.prototype.toString.call(arrayTest) );
    console.log( 'Usando typeof:', typeof objectTest );
    console.log( 'Usando Object.prototype.toString', Object.prototype.toString.call(objectTest) );
    console.log( 'Usando typeof:', typeof myFunc );
    console.log( 'Usando Object.prototype.toString', Object.prototype.toString.call(myFunc) );

    
})();