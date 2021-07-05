(function() {
    'use strict';

    function on(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback, true);
    }

    on('[data-js="link"]', 'click', function(event) {
        event.preventDefault();
        alert('clicou no a');
    });

    on('[data-js="div"]', 'click', function() {
        alert('clicou na div');
    });

    on('[data-js="span"]', 'click', function() {
        alert('clicou no span');
    });

    /* ----------------------------------------------------------------------*/

    function onTwo(element, event, callback) {
        document.querySelector(element).addEventListener(event, callback, false);
    }

    function offTwo(element, event, callback) {
        document.querySelector(element).removeEventListener(event, callback, false);
    }

    function handleClick(event) {
        event.preventDefault();
        alert('clicou no a');
    }

    onTwo('[data-js="linkTwo"]', 'click', handleClick); //Não irá executar nada pq está removendo logo em seguida.
    offTwo('[data-js="linkTwo"]', 'click', handleClick);

    /* ---------------------------------------------------------------------- */

    onTwo('[data-js="input"]', 'input', function(event) { //funcionalidade evento input
        console.log(this.value);
    });

    onTwo('[data-js="inputTwo"]', 'keyup', function(event) { //mantem precionado e solta
        console.log(this.value);
    });

    onTwo('[data-js="inputThre"]', 'keydown', function(event) { //mantem precionado
        console.log(this.value);
    });

    onTwo('[data-js="select"]', 'change', function(event) { //mantem precionado
        console.log(this.value);
        document.querySelector('[data-js="input"]').value = this.value;
    });
})();