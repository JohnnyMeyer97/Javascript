(function() {
    var five = Number('5');
    console.log( `${five} é número?`, typeof five === 'number' );

    var concat = String(10) + 10;
    console.log( `"${concat}" é uma string? E é igual a "1010" ?`, typeof concat === 'string' );

    var operation = {
        '+' : function(x, y) { 
            return x + y;
        },
        '-' : function(x, y) { 
            return x - y;
        },
        '*' : function(x, y) { 
            return x * y;
        },
        '/' : function(x, y) { 
            return x / y;
        },
        '%' : function(x, y) { 
            return x % y;
        }
    };

    function isOperatorValid( operator ) {
        return !!operation[operator]; //Usando o retorno do equivalente boleano.
        
        // OU

        return operation[operator] !== undefined; //Se for undefined a propriedade(ou método) não existe.*/

        // OU

        return ( operator === '+' || operator === '-' || operator === '*' || operator === '/' || operator === '%' ); //Se algum for verdadeiro ele retorna verdadeiro, caso contrário, false. 
        
    }
    console.log( isOperatorValid( '+' ) );
    console.log( isOperatorValid( 'x' ) );

    /*

    */
    function calculator( operator ) {
        if( !isOperatorValid( operator ) ) {
            return false;
        }
        return function( x, y ) {
            if( typeof x !== 'number' || typeof y !== 'number' ) {
                return false;
            }
            return operation[ operator ]( x, y );
        };
    }

    function showOperationMessage( operator, number1, number2 ) {
        return `A operação ${ number1 } ${ operator } ${ number2 } =`;
    }

    function showErrorMessage( operator ) {
        return `Operação ${ operator } não permitida!`;
    }

    var number1 = 0;
    var number2 = 0;
    var operationSignal;

    operationSignal = '+';
    var sum = calculator( operationSignal );

    if ( sum ) {
        number1 = 10;
        number2 = 12;
        console.log( showOperationMessage( operationSignal, number1, number2 ), sum( number1, number2 ) );
    }
    else {
        console.log( showErrorMessage( operationSignal ) );
    }

    operationSignal = '-';
    var subtraction = calculator( operationSignal );
    if ( subtraction ) {
        number1 = 8;
        number2 = 11;
        console.log( showOperationMessage( operationSignal, number1, number2 ), subtraction( number1, number2 ) );
    }
    else {
        console.log( showErrorMessage( operationSignal ) );
    }

    operationSignal = '*';
    var multiplication = calculator( operationSignal );
    if ( multiplication ) {
        number1 = 80;
        number2 = 2;
        console.log( showOperationMessage( operationSignal, number1, number2 ), multiplication( number1, number2 ) );
    }
    else {
        console.log( showErrorMessage( operationSignal ) );
    }

    operationSignal = '/';
    var division = calculator( operationSignal );
    if ( division ) {
        number1 = 150;
        number2 = 3;
        console.log( showOperationMessage( operationSignal, number1, number2 ), division( number1, number2 ) );
    }
    else {
        console.log( showErrorMessage( operationSignal ) );
    }

    operationSignal = '%';
    var mod = calculator( operationSignal );
    if ( mod ) {
        number1 = 150;
        number2 = 11;
        console.log( showOperationMessage( operationSignal, number1, number2 ), mod( number1, number2 ) );
    }
    else {
        console.log( showErrorMessage( operationSignal ) );
    }

    operationSignal = 'lala';
    var lala = calculator( operationSignal );
    if ( lala ) {
        number1 = 150;
        number2 = 11;
        console.log( showOperationMessage( operationSignal, number1, number2 ), lala( number1, number2 ) );
    }
    else {
        console.log( showErrorMessage( operationSignal ) );
    }
})();