var connection = require('../connection');
var event = require('../model/event');

exports.getAll = function(req, res) {
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

exports.get = function(req, res) {
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

exports.add = function(req, res) {
    var event_data = new event();

    event_data.name = req.body.name;
    event_data.description = req.body.description;
    event_data.date = req.body.date;
    event_data.type = req.body.type;
    event_data.subject = req.body.subject;
    event_data.keyword = req.body.keyword;

    event_data.save(function(err, suc) {
        if (err)
            res.json({
                "error": err,
                "status": 400,
                "message": "Bad request"
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
