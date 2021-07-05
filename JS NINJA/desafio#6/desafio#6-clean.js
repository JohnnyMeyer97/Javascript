var championship = 'Campeonato Paulista';
console.log( championship );

var teams = [ 'São Paulo', 'Palmeiras', 'Santos', 'Corinthians', 'Ponte Preta' ];
console.log( 'Times que estão participando do campeonato:', teams );

function showTeamPosition( position ) {
    if( position < 1 || position > 5 ) {
        return 'Não temos a informação do time que está nessa posição.';
    };
    return `O time que está em ${ position }º lugar é o ${ teams[position - 1] }.`;
}

console.log( showTeamPosition( 1 ) );
console.log( showTeamPosition( 3 ) );
console.log( showTeamPosition( 2 ) );
console.log( showTeamPosition( 5 ) );
console.log( showTeamPosition( 8 ) );

var num = 20;
while( num <= 30 ) {
    console.log( num++ );
}

function convertToHex ( color ){
    var hexa;
    switch( color ) {
        case 'red':
            hexa = '#FF0000';
            break;
        case 'blue':
            hexa = '#0000FF';
            break;
        case 'green':
            hexa = '#00FF00';
            break;
        case 'black':
            hexa = '#000000';
            break;
        case 'white':
            hexa = '#FFFFFF';
            break;
        default:
            return `Não temos o equivalente hexadecimal para ${ color }.`;
    }
    return `O hexadecimal para a cor ${ color } é ${ hexa }.`;
}

console.log( convertToHex( 'red' ) );
console.log( convertToHex( 'blue' ) );
console.log( convertToHex( 'green' ) );
console.log( convertToHex( 'black' ) );
console.log( convertToHex( 'white' ) );
console.log( convertToHex( 'purple' ) );
console.log( convertToHex( 'cyan' ) );
console.log( convertToHex( 'magenta' ) );