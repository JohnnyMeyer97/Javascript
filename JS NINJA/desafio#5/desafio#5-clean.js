var myarray = [ 10, 'Johnny', null, { a: 1}, function() {} ];

function myFunction( arr ) {
    return arr;
}

console.log( myFunction( myarray )[1] );

function myFunction2( arr, index ) {
    return arr[ index ];
}

/*
=================================================================================
*/

var myarray2 = [ 'Johnny', 52.4, true, [ 1, 2, 'Ruffini' ], { b: 2} ];

console.log( myFunction2( myarray2, 0 ) );
console.log( myFunction2( myarray2, 1 ) );
console.log( myFunction2( myarray2, 2 ) );
console.log( myFunction2( myarray2, 3 ) );
console.log( myFunction2( myarray2, 4 ) );

function book( bookName) {
    var allBooks = {
        'Segredos do Ninja Javascript': {
            quantidadePaginas: 488,
            autor: 'John Resing & Bear Bibeault',
            editora: 'Novatec'
        },
        'Introdução ao HTML5': {
            quantidadePaginas: 288,
            autor: 'Bruce Lawson & Remy Sharp',
            editora: 'Alta Books'
        },
        'Smashing CSS': {
            quantidadePaginas: 283,
            autor: 'Erick A. Meyer',
            editora: 'Bookman'
        }
    };

    if( !bookName) {
        return allBooks;
    }

    return allBooks[ bookName ];

    // ou: return !bookName ? allBooks : allBooks[ bookName ];
}

console.log( book() );

var bookName = 'Introdução ao HTML5'; // não colide com o nome do PARAMETRO DA FUNÇÃO
console.log( `O livro ${bookName} tem ${book( bookName ).quantidadePaginas} páginas!` )

console.log( `O autor do livro ${ bookName } é ${ book( bookName ).autor }.` );

console.log( `O livro ${ bookName } foi publicado pela editora ${ book( bookName ).editora }.` );