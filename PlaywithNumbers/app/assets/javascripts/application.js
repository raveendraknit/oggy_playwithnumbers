// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require angular
//= require angular-resource
//= require utilities


//= require_tree .


//Angular JS
var playwithNumberApp = angular.module('PlaywithNumberApp',['ngResource']);



playwithNumberApp.controller("landingController", function($scope, $timeout, $window){

    $scope.timeInMs = 0;
    var countUp = function() {
        $scope.timeInMs+= 1;
        $timeout(countUp, 1000);

        if($scope.timeInMs == 2)
        {
            $scope.timeInMs = 0;
            $window.location.href = '/main'
        }
    }
    $timeout(countUp, 500);


})



playwithNumberApp.controller("playgameController", function($scope, $window){

    $scope.letsgo = function(){
        $window.location.href = '/inside'
    }


});


playwithNumberApp.controller('NumberCtrl', function($scope, $window){

    $scope.numb1 = generateARandomNumber(10);
    $scope.numb2 = generateARandomNumber(10);
    $scope.numb3 = generateARandomNumber(20);


    $scope.rs = checkIfSumIsEqual($scope.numb1, $scope.numb2, $scope.numb3);

    $scope.returnTrue = function () {

        $scope.result = true;
        console.log($scope.rs);
        if($scope.result == $scope.rs){
            $scope.numb1 = generateARandomNumber(10);
            $scope.numb2 = generateARandomNumber(10);
            $scope.numb3 = generateARandomNumber(20);
        }
        else{
            alert("stop")
        }
    };

    $scope.returnFalse = function () {
        $scope.result = false;
        console.log($scope.rs);
        if($scope.rs == $scope.result){
            $scope.numb1 = generateARandomNumber(10);
            $scope.numb2 = generateARandomNumber(10);
            $scope.numb3 = generateARandomNumber(20);
        }
        else{
            alert("stop")
        }
    };

});