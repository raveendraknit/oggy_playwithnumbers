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
    };
    $timeout(countUp, 500);
});

playwithNumberApp.controller("playgameController", function($scope, $window, $timeout){
    $scope.status = false;
    $scope.timeInMs = 0;
    $scope.letsgo = function() {
        $scope.status = true;
        var countUp = function () {
            $scope.timeInMs += 1;
            $timeout(countUp, 1000);
            if ($scope.timeInMs == 1) {
                $("div#progressbarcustomize").css({"width":"18%"});
            }
            if ($scope.timeInMs == 2) {
                $("div#progressbarcustomize").css({"width":"38%"});
            }
            if ($scope.timeInMs == 3) {
                $("div#progressbarcustomize").css({"width":"78%"});
            }
            if ($scope.timeInMs == 4) {
                $("div#progressbarcustomize").css({"width":"100%"});
                $window.location.href = '/inside'
            }
        };
        $timeout(countUp, 500);
    }
});

playwithNumberApp.controller('NumberController', function($scope, $window, $timeout){
    $scope.numb1 = generateARandomNumber(5);
    $scope.numb2 = generateARandomNumber(8);
    $scope.numb3 = generateARandomNumber(17);
    $scope.timeInMs = 0;
    var loadprogress = function(){
        $scope.timeInMs = 0;
        var countUp = function () {
            $scope.timeInMs += 1;
            $timeout(countUp, 1000);
            if ($scope.timeInMs == 1) {
                $("div#progressbarcustomize").css({"width":"100%"});
            }
            if ($scope.timeInMs == 2) {
                $("div#progressbarcustomize").css({"width":"0%"});
                alert("YOU LOSE")
            }
        };
        $timeout(countUp, 500);
    };

    loadprogress();

    $scope.returnTrue = function () {
        loadprogress();
        $scope.Operation2numbers = ($scope.numb1 + $scope.numb2);
        if ($scope.Operation2numbers == $scope.numb3) {
            $scope.numb1 = generateARandomNumber(6);
            $scope.numb2 = generateARandomNumber(9);
            $scope.numb3 = generateARandomNumber(14);
        }
        else
        {
                alert("wrong");
        }
    };
    $scope.returnFalse = function () {
        loadprogress();
        $scope.Operation2numbers = ($scope.numb1 + $scope.numb2);
        if($scope.Operation2numbers != $scope.numb3){
            $scope.numb1 = generateARandomNumber(9);
            $scope.numb2 = generateARandomNumber(9);
            $scope.numb3 = generateARandomNumber(18);
        }
        else{
            alert("right");
        }
    };
});