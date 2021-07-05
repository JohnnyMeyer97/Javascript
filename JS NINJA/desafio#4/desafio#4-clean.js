var isTruthy = function(param) {
    //return param ? true : false;
    //OU
    return !!param; //equivalente boleano
};

/*
==========================================================================
*/

var carro = {
    marca: 'Fiat',
    modelo: 'Bravo',
    placa: 'ABC-1234',
    ano: 2013,
    cor: 'Azul',
    quantidadesPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

carro.mudarCor = function(cores){
    carro.cor = cores;
};

carro.obterCor = function() {
    return carro.cor;
};

carro.obterModelo = function() {
    return carro.modelo;
};

carro.obterMarca = function() {
    return carro.marca;
};

carro.obterMarcaModelo = function() {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
}

carro.adicionarPessoas = function( numeroPessoas ) {
    var totalPessoas = carro.quantidadePessoas + numeroPessoas;
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    var pluralOuSingular = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
    
    if( carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos ) {
        return 'O carro já está lotado!';
    }

    if( totalPessoas > carro.assentos ) {
        return `Só cabem mais ${quantasPessoasCabem} pessoa!`
    }

    carro.quantidadePessoas += numeroPessoas;
    return `Já temos ${carro.quantidadePessoas} ${pluralOuSingular} no carro!`;
}
