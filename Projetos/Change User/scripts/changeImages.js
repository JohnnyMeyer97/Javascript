var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './images/imagem-1.png') {
      myImage.setAttribute ('src','./images/imagem-2.png');
    } else {
      myImage.setAttribute ('src','./images/imagem-1.png');
    }
}
/*
Então aqui, nós estamos armazenando uma referência (tag) ao nosso elemento de imagem na variável myImage. Depois, nós fazemos o evento onclick dessa variável igual a uma função anônima. Agora, toda vez que esse elemento de imagem é clicado:

1. Nós recuperamos o valor do atributo src da imagem. (Guarda o src na variável)
2. Nós usamos uma condicional para checar se o valor src é igual ao caminho da imagem original:
	1. Se for, nós mudamos o valor do src para o caminho da segunda imagem, forçando a outra imagem a ser carregada dentro do elemento <image>.
  2. Se não é (significando que já mudou), nós mudamos o valor src de volta ao caminho da imagem original, para voltarmos ao que era antes.
*/