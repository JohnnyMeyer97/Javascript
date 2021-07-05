'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var cars = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res) {
    res.send("Servidor Company");
});

app.post('/cars', function(req, res) {
    var image = req.body.image;
    var brand = req.body.brand;
    var year = req.body.year;
    var plate = req.body.plate;
    var color = req.body.color;

    var hasCar = cars.some(function(car) {
        return car.plate === plate;
    });

    if(!hasCar) {
        cars.push({
            image: image,
            brand: brand,
            year: year,
            plate: plate,
            color: color
        });
    }
    else {
        console.log('Carro já existe! Cadastre outro, por favor.');
    }
    res.json(cars);
});
app.listen(8081, function() {
    console.log("Servidor funcionando na porta 8081");
});