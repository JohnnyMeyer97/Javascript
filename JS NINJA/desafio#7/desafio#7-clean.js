var arr = [ true, 15, 'Johnny', function(){}, { curso: 'Javascript Ninja'} ];

function addItem ( item ) {
    arr.push( item );
    return arr;
}

console.log( addItem( [ 3, true, 'Ninja'] ) );

console.log( `O segundo elemento do segundo array é ${ arr[5][1] }.` );

console.log( `O primeiro array tem ${ arr.length } itens.` );

console.log( `O segundo array tem ${ arr[5].length } itens.` );

console.log( 'Números pares entre 10 e 20:' );
var counter = 20;
while( counter <= 20 ){
    counter % 2 === 0 ? console.log( counter ) : '';
    counter++;
}

console.log( 'Números impares entre 10 e 20:' );
counter = 10;
while( counter < 20 ){
    counter % 2 !== 0 ? console.log( counter ) : '';
    counter++;
}

console.log( 'Números pares entre 100 e 120:' );
for( var counter = 100; counter <= 120; counter++ ){
    counter % 2 === 0 ? console.log( counter ) : '';
}

console.log( 'Números impares entre 111 e 125:' );
for( var counter = 111; counter <= 125; counter++ ){
    if( counter % 2 !== 0 ){
        console.log( counter );
    }
}