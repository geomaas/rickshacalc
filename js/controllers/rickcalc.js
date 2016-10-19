let calc = angular.module('RickControllers');

calc.controller('RickController', ['$scope', 'RickService', function ($scope, RickService) {

    // $scope.info = RickService.getInfo();
    $scope.moneyPerMile = function() {
      console.log("click");
      console.log($scope.money / $scope.mileage);
      return $scope.answer = $scope.money/ $scope.mileage;

    }
}]);
