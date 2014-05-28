
function generateARandomNumber(min, max) {
    return Math.floor(Math.random()*(max-(min+1))+(min+1));
}


function checkIfSumIsEqual(numb1, numb2, sum){
  return (numb2 + numb1) == sum;
  $scope.rs = checkIfSumIsEqual($scope.numb1, $scope.numb2, $scope.numb3);
}
