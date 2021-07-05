(function() {
    'use strict';

    /*
            DOM
        insertAdjacentHTML(pos, text)

        posições do (pos):
        <!-- beforebegin -->
        <p>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
        </p>
        <!-- afterend -->

        * Funciona da mesma forma que o innerHTML, com algumas diferenças.

        console.dir($element): Traz as propriedades do elemento.

        outerHTML: traz o próprio elemento em string.
        ex:
        $form.insertAdjacentHTML('afterend', $form.outerHTML);

        Alem do mozilla, o site devdocs.io tem toda a documentação para boa parte das linguagens.
    */

    // Objeto Date

    var year = 2015;
    var month = 10;
    var day = 7;
    var hour = 10;
    var min = 10;
    var sec = 0;
    var milliseconds = 0;
    var date = new Date(year, month, day, hour, min, sec, milliseconds);
    console.log('Data: ', date );

    /*  Métodos

    Date.now() - Método estático, não precisa instânciar o objeto Date, traz o número de milisegundos que se passaram desde 1º de janeiro de 1970 às 00:00 até o momento.

    Date.now() = em milisegundos
    Date.now() / 1000 = em segundos
    Date.now() / 1000 / 60 = em minutos
    Date.now() / 1000 / 60 / 60 = em horas
    Date.now() / 1000 / 60 / 60 / 24 = em dias
    Date.now() / 1000 / 60 / 60 / 24 / 365 = em anos

    Métodos após instânciar

    date.getDate(); // 0-31
    date.getDay(); // 0-6
    date.getFullYear(); //2015
    date.getYear(); //115
    date.getHours(); //0-23
    date.getMilliseconds(); // 0-999
    date.getMinutes(); // 0-59
    date.getMonth(); // 0-11
    date.getSeconds(); // 0-59
    date.getTime(); // ms desde 1/1/1970 0:00:00 UTC

    */
})();