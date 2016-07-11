var Mongoose = require("Mongoose");

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
    console.log('Conectando ao MongoDB');
});

Mongoose.connect('mongodb://localhost/js-examples');
