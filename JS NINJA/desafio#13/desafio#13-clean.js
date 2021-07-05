(function (){

    console.log( 'O array em formato de string é:' );
    console.log( [ 1, 2, 3, 4, 5 ].toString() );

    var sul = [ 'Parana', 'Santa Catarina', 'Rio Grande do Sul' ];
    var sudeste = [ 'Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo' ];

    console.log( '\nAlguns Estados do Brasil:' );
    var brasil = sul.concat( sudeste );
    console.log( brasil );

    console.log( '\nMais estados adicionados:' );
    brasil.unshift( 'Acre', 'Amapá', 'Amazonas' );
    console.log( brasil );

    console.log( '\nEstado removido:' );
    console.log( brasil.shift() );

    var newSul = brasil.slice( 2, 5 );

    console.log( '\nEstados do Sul do Brasil:' );
    console.log( newSul );

    console.log( '\nAlguns Estados do Brasil:' );
    console.log( brasil );

    var nordeste = [
        'Alagoas',
        'Bahia',
        'Ceará',
        'Maranhão',
        'Paraiba',
        'Pernambuco',
        'Piaui',
        'Rio Grande do Norte',
        'Sergipe'
    ];

    console.log( '\nEstados do Nordeste:' );
    console.log( nordeste );

    var newSudeste = brasil.splice( 5 );

    brasil = brasil.concat( nordeste ); // concat não tem efeito colateral, então é preciso atribuir a alguém

    console.log( '\nEstados em newSudeste:' );
    console.log( newSudeste );

    console.log( '\nAlguns estados do Brasil:' );
    console.log( brasil );

    var newBrasil = [];
    brasil.forEach(function(item, index) {
        newBrasil.push({
            id: index,
            estado: item
        });
    });

    console.log( '\nnewBrasil:' );
    console.log( newBrasil );

    console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
    var every = brasil.every(function(item) { // lembre-se que o every passa/aplica-se em todos
        return item.lenght > 7;
    });
    console.log(
        every
        ? 'Sim, todos os estados tem mais de 7 letras!'
        : 'Nem todos os estados tem mais de 7 letras!'
    );

    console.log( '\nCeará está incluído em `brasil`?' );
    var some = brasil.some(function(item) { // passa/aplica-se até que ao menos um for verdadeiro (consultar revisão do desafio #13 07:17)
        return item === 'Ceará';
    });
    console.log(
        some
        ? 'Ceará está incluso'
        : 'Ceará não foi incluso :('
    );

    var map = newBrasil.map(function(item, index) { // lembre-se que retorna o item por padrão
        return {
            id: item.id + 1,
            estado: item.estado + ' pertence ao Brasil'
        };
        // OU
        /*
        item.id++;
        item.estado += ' pertence ao Brasil';
        return item;
        */
    });

    console.log( '\nnewBrasil agora com mais informações:' );
    console.log( map );

    var filter = map.filter(function(item, index) { // por padrão já retorna o item se a expressão (dentro da function) for verdadeira.
        return item.id % 2 === 0;
    });

    console.log( '\nEstados com ID par:' );
    console.log( filter );

})();