var sum = function calculateSum( x, y ) {
    return x + y;
};

var value1 = 10;
var value2 = 20;
console.log( `A soma de ${ value1 } e ${ value2 } é igual a ${ sum( value1, value2) }.` );

console.log( `O nome da função que faz a soma é ${ sum.name }.` );

function showName() {
    return 'Johnny Ruffino';
}

var varShowName = showName;

console.log( `A função ${ varShowName.name } retorna ${ varShowName() }.` );

function calculator( operator ) {
    return function( number1, number2 ) {
        var result;
        switch( operator ) {
            case '+' :
                result = number1 + number2;
                break;
            case '-' :
                result = number1 - number2;
                break;
            case '*' :
                result = number1 * number2;
                break;
            case '/' :
                result = number1 / number2;
                break;
            case '%' :
                result = number1 % number2;
                break;
            default :
                return 'Operação inválida.';
        }
        return `Resultado da operação: ${ number1 } ${ operator } ${ number2 } = ${ result }.`;
    };
}

var sum = calculator( '+' );

console.log( sum( 7, 8 ) );

var subtraction = calculator( '-' );
var multiplication = calculator( '*' );
var division = calculator( '/' );
var mod = calculator( '%' );

console.log( subtraction( 5, 2 ) );
console.log( multiplication( 20, 8 ) );
console.log( division( 15, 3 ) );
console.log( mod( 50, 10 ) );