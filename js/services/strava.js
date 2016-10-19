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
