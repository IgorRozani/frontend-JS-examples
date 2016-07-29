'use strict';

angularApp.factory('eventService', function($resource) {
    var service = $resource('/event/:id', {
        id: '@id'
    }, {
        'update': {
            method: 'PUT'
        }
    });

    return {
        getAll: function() {
            return service.query();
        },
        getById: function(eventId) {
            return resource.get({id: eventId});
        },
        create: function(event) {
            return resource.post(event);
        },
        update: function(eventId, event) {
            return resource.update({
                id: eventId
            }, event);
        },
        delete: function(eventId) {
            return resource.delete({id: eventId});
        }
    };

});
