/*var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

/*
Essa função contem uma função prompt(), que traz uma caixa de diálogo assim como o alert() faz; a diferença é que o prompt() pede ao usuário para inserir algum dado, e guarda os dados em uma variável quando o botão OK é pressionado. Nesse caso, nós estamos pedindo ao usuário para digitar seu nome. Agora, nós invocamos uma API chamada localStorage, o que nos permite guardar dados no navegador para usarmos mais tarde. Nós usamos a função setItem() do localStorage's para criar e guardar um item de dado chamado 'name', e relaciona seu valor à variável  myName que contem o nome que o usuário digitou. Finalmente, nós associamos o innerHTML do cabeçalho a uma string, mais o nome do usuário.
*/

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

/*
Primeiramente, esse bloco usa o operador de negação (NOT lógico representado pelo !) para checar se o dado name existe — se não existir, a função setUserName() executa para criá-lo. Se ele já existir (isto é, se o usuário já tiver digitado quando visitou o site anteriormente), nós recuperamos o nome guardado usando getItem() e associamos o innerHTML do cabeçalho a uma string, mais o nome do usuário, assim como fizemos dentro de setUserName().
*/
myButton.onclick = function() {
  setUserName();
}

/*
Finalmente, coloque o gerenciador de evento onclick no botão, para que quando clicado, ele execute a função setUserName(). Isso permite ao usuário dar um novo nome sempre que quiserem ao pressionar o botão.

Agora quando você visitar seu site pela primeira vez, vai te perguntar o nome de usuário e te dar uma mensagem personalizada. Você pode então mudar o nome toda vez que quiser ao pressionar o botão. Como um bonus, porque o nome é guardado dentro de localStorage, ele persiste depois que a janela do site é fechada, então a mensagem personalizada sempre estará lá quando você abre o site novamente!
*/