'use strict';

var angularApp = angular.module('angularApp', ['ngRoute', 'ngResource']).config(function($routeProvider) {
    $routeProvider.when('/list', {
        templateUrl: 'templates/EventListController.html',
        controller: 'EventListController'
    });
    $routeProvider.otherwise({redirectTo: '/list'});
});
