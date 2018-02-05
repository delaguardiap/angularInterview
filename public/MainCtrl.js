angular.module("MainCtrl", []).controller("MainController",['$http', function($scope, $http) {
  $scope.title = "Listen damn it! we will win!";
  $scioe.products = $http.get("/api/products");
}]);

