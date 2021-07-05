(function($) {
    'use strict';

    /*
    Hora de finalizar nosso projeto!

    Já temos o cadastro funcionando e persistindo em memória;
    Já estamos deletando o carro da tabela (no frontend).

    Mas se você perceber, se você recarregar a tela, o carro ainda vai estar lá.
    Agora você precisa fazer com que, ao clicar no botão de deletar, o carro seja
    removido da tabela e também seja deletado do servidor.

    Para fazer isso, você precisa enviar o verbo HTTP "DELETE" para a mesma URL
    que você faz o POST para cadastrar o carro:
    `http://localhost:3000/car`, só que, ao invés de enviar todas as informações
    do carro, como você faz para cadastrar, você deve enviar somente a placa
    do carro.

    Fazendo isso, ao recarregar a tela, a tabela deve mostrar os carros atualizados.

    A lógica do servidor que está criada nesso diretório desse desafio é o mesmo
    do desafio anterior, com a diferença que, nesse desafio, nós temos a
    implementação da regra para a deleção do carro =)

    A regra é a mesma das anteriores: crie uma branch `challenge-33` no seu
    repositório do GitHub, e envie o pull request para lá.

    Depois, envie um pull request no repositório do curso, colocando no console.log
    abaixo a URL do pull request no seu repositório.
    */
    var app = (function() {
        return {
        init: function init() {
            console.log('App init.');
            //this.companyInfo();
            this.initEvents();
        },

        initEvents: function initEvents() {
            $('[data-js="form-register"]').on('submit', this.handleSubmit);
            //$('[data-js="form-register"]').on('reset', this.handleRemove); função que ira deletar
        },

        ajax: function ajax() {
            var carData = this.getDataCar();
            var dataString = JSON.stringify(carData);

            var ajaxPost = new XMLHttpRequest();
            ajaxPost.open('POST', 'http://localhost:8081/cars');
            ajaxPost.setRequestHeader('Content-Type', 'application/json');
            ajaxPost.send(dataString);
            
            console.log('Cadastrando Carro...');
            ajaxPost.onreadystatechange = function() {
                if(ajaxPost.readyState === 4) {
                    console.log('Carro cadastrado!', ajaxPost.responseText);
                }
            };
                //var postObj = JSON.parse(postString);
                //console.log('Parse: ', postObj);
        },

        getDataCar: function getDataCar() {
            var car = {
                image: $('[data-js="image"]').get().value,
                brand: $('[data-js="brand-model"]').get().value,
                year: $('[data-js="year"]').get().value,
                plate: $('[data-js="plate"]').get().value,
                color: $('[data-js="color"]').get().value
            };
            return car;
        },
/*zzz
        handleSubmit: function handleSubmit(e) {
            e.preventDefault();
            console.log('submit');
            var $tableCar = $('[data-js="table-car"]').get();
            $tableCar.appendChild(app.createNewCar());
        },

        createNewCar: function createNewCar() {
            var carData = this.getDataCar();
            // Cria os elementos na tela
            var $fragment = document.createDocumentFragment();
            var $tr = document.createElement('tr');
            var $tdImage = document.createElement('td');
            var $image = document.createElement('img');
            var $tdBrand = document.createElement('td');
            var $tdYear = document.createElement('td');
            var $tdPlate = document.createElement('td');
            var $tdColor = document.createElement('td');

            // Pego os valores - ESSES VALORES QUE SERÃO PASSADOS PARA O BACKEND
            //$image.setAttribute('src', $('[data-js="image"]').get().value);
            $image.src = carData.image;
            $tdImage.appendChild($image);
            $tdBrand.textContent = carData.brand;
            $tdYear.textContent = carData.year;
            $tdPlate.textContent = carData.plate;
            $tdColor.textContent = carData.color;
                        
            // Atribuo os elementos dentro da linha da tabela
            $tr.appendChild($tdImage);
            $tr.appendChild($tdBrand);
            $tr.appendChild($tdYear);
            $tr.appendChild($tdPlate);
            $tr.appendChild($tdColor);

            return $fragment.appendChild($tr);
        },
*/
        /*
        companyInfo: function companyInfo() {
            var ajax = new XMLHttpRequest();
            ajax.open('GET', 'http://company.json', true);
            ajax.send();
            ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
        },

        getCompanyInfo: function getCompanyInfo() {
            if(!app.isReady.call(this))
            return;

            var data = JSON.parse(this.responseText);
            var $companyName = $('[data-js="company-name"]').get();
            var $companyPhone = $('[data-js="company-phone"]').get();
            $companyName.textContent = data.name;
            $companyPhone.textContent = data.phone;
        },

        isReady: function isReady() {
            return this.readyState === 4 && this.status === 200;
        } */
        };
    })();

  app.init();
  app.ajax();

})(window.DOM);
