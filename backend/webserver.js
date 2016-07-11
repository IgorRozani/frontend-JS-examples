var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var eventService = require('./controller/eventController');

var app = express();



// Caminho da pasta do server
var path = require("path");
// Raiz do projeto
var rootPath = path.normalize(__dirname + '/../');
//const clientService = require('./clientController');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/static', express.static(rootPath + '/node_modules'));
app.get('/event/:id', events.get);
app.get('/event', events.getAll);
app.post('/event/:id', events.save);
//app.use('/', express.static(rootPath + '/frontend'));

app.listen(8000, function() {
    console.log('Listening on port 8000...');
});
