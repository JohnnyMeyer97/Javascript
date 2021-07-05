// Pode procurar o desafio completo no github

/*
Declarar uma variável 'pessoa', que receba suas informações pessoais:
As propriedades e tipos de valores para cada prorpiedade desse objeto deve ser:
 - 'nome' - string
 - 'sobrenome' - string
 - 'sexo' - string
 - 'idade' - number
 - 'altura' - number
 - 'peso' - number
 - 'andando' - boolean - recebe 'falso por padrão'
 - 'caminhouQuantosMetros - number - recebe 'zero' por padrão
*/
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

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function(){
    pessoa.idade++;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(metros) {
    pessoa.caminhouQuantosMetros += metros;
    passoa.andando = true;
};

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function(){
    pessoa.andando = false;
};

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function(){
    return `Olá! meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`
};

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function(){
    return `Olá, eu tenho ${pessoa.idade} anos!`
};

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function(){
    return `Eu peso ${peeso.peso}kg.`
};

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function(){
    return `Minha altura é: ${pessoa.altura}m.`
};

/* FAZER NO NODEJS OU CONSOLE DO NAVEGADOR

Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
//?

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
//?

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
//?

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
//?

/*
Faça a `pessoa` fazer 3 aniversários.
*/
//?

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
//?

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
//?

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
//?

/*
Se a pessoa ainda está andando, faça-a parar.
*/
//?

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
//?

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
//?
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
