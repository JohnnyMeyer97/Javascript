/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno de função deve ser a multiplicação dos 3 argumentos, somando '2' ao resultado da multiplicação.
*/

function newFunction( a, b, c ) {
    if( a === undefined || b === undefined || c === undefined) {
        return 'Preencha todos os valores corretamente!';
    } else {
        return ( a * b * c ) + 2;
    }
}

newFunction()
/* Ou da melhor forma:

function newFunction( a, b, c ) {
    if( a === undefined || b === undefined || c === undefined) {
        return 'Preencha todos os valores corretamente!';
    }
    return ( a * b * c ) + 2;
    }
}

*/
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano 'false'.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne 'null'(nunca caira neste caso, é só por questões didaticas).
*/

function threeArgs(x, y, z){
    if(x !== undefined && y === undefined && z === undefined){
        return x;
    }
    else if(x !== undefined && y !== undefined && z === undefined){
        return x + y;
    }
    else if(x !== undefined && y !== undefined && z !== undefined){
        return ( x + y ) / z;
    }
    else if(x === undefined && y === undefined && z === undefined){
        return false;
    }
    else {
        return null;
    }
}

threeArgs()