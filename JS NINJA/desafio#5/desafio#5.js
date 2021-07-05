/*
Crie uma variável que receba um array com alguns valores aleatórios - ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [ 10, 'Johnny', null, { a: 1}, function() {} ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction( arr ) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( myFunction( myarray )[1] );

/*
Crie uma função que recebe dois parâmetros: o primeira, um array de valores; e o segundo, um número. A função deve retornar um índice do array que foi passado no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no segundo parâmetro.
*/
function myFunction2( arr, index ) {
    return arr[ index ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipo diferentes.
*/
var myarray2 = [ 'Johnny', 52.4, true, [ 1, 2, 'Ruffini' ], { b: 2} ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado.
*/
console.log( myFunction2( myarray2, 0 ) );
console.log( myFunction2( myarray2, 1 ) );
console.log( myFunction2( myarray2, 2 ) );
console.log( myFunction2( myarray2, 3 ) );
console.log( myFunction2( myarray2, 4 ) );

/*
Crie uma função chamada 'book', que recere um parâmetro, que será o nome do livro. Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
 - esse objeto irá receber 3 propriedades, que serão nomes de livro;
 - cada uma dessas propriedades será um novo objeto, que terá outras 3 propriedades:
     - 'quantidadePaginas' - Number (quantidade de páginas)
     - 'autor' - String
     - 'editora' - Sring
 - A função deve retornar o objeto referente ao livro passado por parâmetro.
  - Se o parametro não for passado, a função deve retornar o objeto com todos os livros.
*/
function book( bookName ) {
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

    return allBooks[ bookName ]; //Invés de passar o índice, passa o nome.

    // ou: return !bookName ? allBooks : allBooks[ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Introdução ao HTML5'; // não colide com o nome do PARAMETRO DA FUNÇÃO
console.log( `O livro ${bookName} tem ${book( bookName ).quantidadePaginas} páginas!` );
// ou: console.log( `O livro Introdução ao HTML5 tem ${book( 'Introdução ao HTML5' )['quantidadePaginas']} páginas!` );

/*
Ainda usando a função acima, imprima o nome de autor de um livro qualquer, usando a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( `O autor do livro ${ bookName } é ${ book( bookName ).autor }.` );

/*
Ainda usando a função acima, imprima o nome da editora de um livro qualquer, usando a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( `O livro ${ bookName } foi publicado pela editora ${ book( bookName ).editora }.` );