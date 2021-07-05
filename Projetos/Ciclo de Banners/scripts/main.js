var adImages = new Array("./images/imagem-1.png", "./images/imagem-2.png", "./images/imagem-3.png");
var adURL = new Array("apostilando.com", "multimidia.com", "adobe.com.br");
var thisAd = 0;
var imgCt = adImages.length;
var ad = document.querySelector(".ad");
var linkAd = document.querySelector(".linkAd");

function rotate() { // Mudar imagem
    if(ad) {
        thisAd++
        if(thisAd == imgCt) {
            thisAd = 0
        }
        ad.src = adImages[thisAd];
        setTimeout("rotate()", 3*1000);
    }
}

function newLocation() { // Mudar link da imagem
    document.location.href = "http://www." + adURL[thisAd]
    //linkAd.href = "http://www." + adURL[thisAd]
}