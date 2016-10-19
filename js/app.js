let app = angular.module('LibraryApp', ['ngRoute', 'RickControllers', 'RickServices']);
angular.module('RickControllers', []);       // create empty module
// angular.module('LibraryServices', []);          // create empty module

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/available.html',
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

/* Directives */
