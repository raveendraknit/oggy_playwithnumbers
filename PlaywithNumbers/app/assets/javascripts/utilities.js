function generateARandomNumber(MaxValue){
  return Math.floor(Math.random()*MaxValue);
}

function checkIfSumIsEqual(numb1, numb2, sum){
  return (numb2 + numb1) == sum;
  $scope.rs = checkIfSumIsEqual($scope.numb1, $scope.numb2, $scope.numb3);
}
