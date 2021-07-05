var pessoa = {
    nome: 'Johnny',
    sobrenome: 'Ruffini',
    sexo: 'Masculino',
    idade: 22,
    altura: 1.85,
    peso: 70,
    andando: false,
    caminhouQuantosMetros: 0
};

pessoa.fazerAniversario = function(){
    pessoa.idade++;
}

pessoa.andar = function(metros) {
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
};

pessoa.parar = function(){
    pessoa.andando = false;
};

pessoa.nomeCompleto = function(){
    return `Olá! meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`
};

pessoa.mostrarIdade = function(){
    return `Olá, eu tenho ${pessoa.idade} anos!`
};

pessoa.mostrarPeso = function(){
    return `Eu peso ${pessoa.peso}kg.`
};

pessoa.mostrarAltura = function(){
    return `Minha altura é: ${pessoa.altura}m.`
};

pessoa.apresentacao = function() {
    var sexo = 'o';
    var idadeAnos = 'anos';
    var metrosCaminhados = 'metros';

    if( pessoa.sexo === 'Feminino' ) {
        sexo = 'a';
    }

    if( pessoa.idade === 1 ) {
        idadeAnos = 'ano';
    }

    if( pessoa.caminhouQuantosMetros === 1 ) {
        metrosCaminhados = 'metro';
    }

    return `Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${idadeAnos}, ${pessoa.altura}m, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metrosCaminhados}!`
};