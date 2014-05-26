var playwithNumberApp = angular.module('PlaywithNumberApp',['ngResource']);
playwithNumberApp.controller('NumberCtrl', function($scope){
  $scope.numb1=  generateARandomNumber();
  $scope.numb2=  generateARandomNumber();
  $scope.numb3 = generateARandomNumber();
  $scope.rs = checkIfSumIsEqual($scope.numb1, $scope.numb2, $scope.numb3)
});