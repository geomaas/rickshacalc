(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let calc = angular.module('RickControllers');

calc.controller('RickController', ['$scope', 'RickService', function ($scope, RickService) {

    // $scope.info = RickService.getInfo();
    $scope.moneyPerMile = function() {
      console.log("click");
      console.log($scope.money / $scope.mileage);
      $scope.answer = ($scope.money/ $scope.mileage).toFixed(2);

    }
}]);

},{}],2:[function(require,module,exports){
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

},{"./controllers/rickcalc":1,"./services/strava":3}],3:[function(require,module,exports){
let current = angular.module('RickServices');

current.factory('RickService', ['$http', function ($http) {
    let travelInfo = [];

    return {
        /* GET request for book list */
        getInfo: function () {
            $http({
                method: 'get',
                url: 'GET https://www.strava.com/oauth/authorize'
            }).then(function (response) {
                console.table(response.data);

                // angular.copy(response.data.books, books);
            });

            return travelInfo;
        },
        /* POST request to update one book */
        // borrowBook: function (book) {
        //
        // },
        /* POST request to update one book */
        // returnBook: function (book) {
        //
        // },
    };
}]);

},{}]},{},[2])