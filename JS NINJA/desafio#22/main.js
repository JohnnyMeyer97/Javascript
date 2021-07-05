(function(win, doc) {

    'use strict';

    var myFunction = function olaMundo(name, town, city) {
        console.log( `Me chamo ${name}, moro em ${town} - ${city}` );
    }
    myFunction('Antonio', 'SBC', 'SP');

    console.log( `A função "${myFunction.name}" tem ${myFunction.length} parâmetro(s)!` );
    console.log(`Eis a função: ${myFunction.toString()}` );
//---------    
    function otherFunction() {
        console.log(this.lastName);
    }
    
    var obj = {
        lastName: 'Rodrigues'
    };
    var otherObj = {
        lastName: 'Lima'
    };
    
    otherFunction.call( obj );
    otherFunction.call( otherObj );
//---------
    function myFunction2(a, b, c) {
        console.log(this.lastName, a, b, c);
    }

    var arr = [1, 2, 3];

    myFunction2.apply( obj, arr );
//---------
})(window, document);


/*
.name = Nome da função;
.length = Quantos parâmetros a função têm;
.toString() = Retorna toda a função em formato de string;
.call(this) = Invoca a função, é o mesmo que myFunction() também serve para passar por parâmetro quem será o this da função. 
.call(this, arg1, arg2,..., argN) = Também dá para passar argumentos para a função;
.apply()/.apply(this) = Para invocar a função/ Como o primeiro parâmetro sendo o this daquela função; 
.apply(this, [arg1, arg2, ..., argN]) = Passando um array como parâmetros;

*/

