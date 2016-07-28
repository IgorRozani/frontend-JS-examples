var express = require('express');
var bodyParser = require('body-parser');
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

// node_modules
app.use('/static', express.static(rootPath + '/node_modules'));
// Service
app.get('/event', eventService.getAll);
app.get('/event/:id', eventService.get);
app.post('/event', eventService.add);
app.put('/event/:id', eventService.update);
app.delete('/event/:id', eventService.delete);

//Frontends
app.use('/angular', express.static(rootPath + '/frontend/angularjs'));

app.listen(8000, function() {
    console.log('Listening on port 8000...');
});
