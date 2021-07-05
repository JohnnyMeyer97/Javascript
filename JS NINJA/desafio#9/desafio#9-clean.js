(function() {

    function myFunction() {
        var number1 = 10;
        var number2 = 20;
        console.log( 'Na função `myFunction`, o primeiro número é', number1 );
        console.log( 'Na função `myFunction`, o segundo número é', number2 );
        return number1 + number2;
    }
    myFunction();

    function myFunction2() {
        var number1 = 10;
        var number2 = 20;
        var sum = function sum() {
            return number1 + number2;
        };
        console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
        return sum();
    }
    myFunction2();

    function myFunction3() {
        function sum() {
            return number1 + number2;
        }
        var number1 = 40;
        var number2 = 50;
        console.log( 'A soma de 40 e 50 é igual a', sum() );
        console.log( 'Na função myFunction3, number1 é igual a', number1 );
        return sum();
    }
    myFunction3();

    function calculator( num1, num2) {
        return function( callback ) {
            return callback( num1, num2 );
        };
    }

    var sum = calculator( 10, 2 );

    console.log( 'O resultado da soma é:' );
    console.log( sum( function( number1, number2 ) {
        return number1 + number2;
    } ) );

    var subtraction = calculator( 5, 2 );
    var multiplication = calculator( 3, 3 );
    var division = calculator( 100, 10 );
    var mod = calculator( 50, 32 );

    console.log( 'O resultado da subtração é:');
    console.log( subtraction( function( number1, number2 ) {
        return number1 - number2;
    } ) );

    console.log('O resultado da multiplicação é:');
    console.log( multiplication( function( number1, number2 ) {
        return number1 * number2;
    } ) );

    console.log('O resultado da divisão é:');
    console.log( division( function( number1, number2 ) {
        return number1 / number2;
    } ) );

    console.log('O resto da divisão é:');
    console.log( mod( function( number1, number2 ) {
        return number1 % number2;
    } ) );

})();