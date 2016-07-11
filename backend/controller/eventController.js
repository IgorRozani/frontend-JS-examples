var connection = require('../connection');
var event = require('../model/event');
var event_data = new event();

module.exports.getAll = function(req, res) {
    event.find({}, function(err, items) {
        if (err)
            res.json({
                "message": err,
                "status": 500,
                "error": "error with Server database"
            });
        else {
            res.json({
                "status": 200,
                "events": items
            });
        }
    });
};

module.exports.get = function(req, res) {
    var name = req.params.name;
    event.find({
        "name": name
    }, function(err, item) {
        if (err)
            res.json({
                "message": err,
                "status": 500,
                "error": "error with Server database"
            });
        else {
            res.json({
                "status": 200,
                "event": item
            });
        }
    });
};

module.exports.add = function(req, res) {
    var event = req.body;
    var id = req.params.id;

    event_data.name = event.name;
    event_data.description = event.description;
    event_data.date = event.date;
    event_data.type = event.type;
    event_data.subject = event.subject;
    event_data.keyword = event.keyword;

    event_data.save(function(err, suc) {
        if (err)
            res.json({
                "message": err,
                "status": 400,
                "error": "Bad request"
            });
        else
            res.json({
                "status": 200,
                "id": suc.id
            });
    });
};



/*module.exports.update = function(req, res) {
    var event = req.body;
    var id = req.params.id;
}

module.exports.delete = function(req, res) {
    var id = req.params.id;
};*/
