let calc = angular.module('RickControllers');

calc.controller('RickController', ['$scope', 'RickService', function ($scope, RickService) {

    // $scope.info = RickService.getInfo();
    $scope.moneyPerMile = function() {
      console.log("click");
      console.log($scope.money / $scope.mileage);
      $scope.answer = ($scope.money/ $scope.mileage).toFixed(2);

    }
}]);
