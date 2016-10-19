let app = angular.module('RickshawCalc', ['ngRoute', 'RickControllers', 'RickServices']);
angular.module('RickControllers', []);       // create empty module
angular.module('RickServices', []);          // create empty module

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/calc', {
            templateUrl: 'templates/calc.html',
            controller: 'RickController',
        })
        // .when('/borrowed', {
        //     templateUrl: 'templates/borrowed.html',
        //     controller: 'BorrowedController',
        // });
}]);

/* Controllers */
require('./controllers/rickcalc');
// require('./controllers/borrowed');

/* Services */
require('./services/strava')

/* Directives */
