(function() {
    'use strict';

    console.time('Calculando o tempo do for:');
    for( var i = 0; i < 2000; i++ ) {
        console.log('Contando...');
    }
    console.timeEnd('Calculando o tempo do for:');


    var arr = [
        { item: 'Arroz', price: 'R$ 10', weight: '1kg' },
        { item: 'Feijão', price: 'R$ 20', weight: '2kg' },
        { item: 'Macarrão', price: 'R$ 12', weight: '1.5kg' },
        { item: 'Carne', price: 'R$ 30', weight: '10kg' }
    ];
    console.table( arr );

})();