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
    $timeout(countUp, 1000);
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
    };
    //Popup score
    $scope.addclasspopup = function(){
        $( "div.popup-score" ).addClass("popup-on");
        $( "div.popup-close").addClass("btn-show");
    };

    $scope.removeClasspopup = function(){
        $( "div.popup-score" ).removeClass("popup-on");
        $( "div.popup-close").removeClass("btn-show");
    };
    //popup help
    $scope.addclasspopuphelp = function(){
        $( "div.popup-help" ).addClass("popup-help-on");
        $( "div.popup-help-close").addClass("btn-help-show");
    };

    $scope.removeClasspopuphelp = function(){
        $( "div.popup-help" ).removeClass("popup-help-on");
        $( "div.popup-help-close").removeClass("btn-help-show");
    };

});

playwithNumberApp.controller('NumberController', function($scope, $window, $timeout){

    $scope.current_score = 0;

    $scope.numb1 = generateARandomNumber(1,9);
    $scope.numb2 = generateARandomNumber(1,9);
    $scope.numb3 = generateARandomNumber3(1,18);

    $("div#progressbarcustomize").css({"width":"100%"});

    $scope.timeInMs = 0;
    var countUp = function() {
        $scope.timeInMs++;
        $timeout(countUp, 1000);
        if ($scope.timeInMs == 1) {
            $("div#progressbarcustomize").css({"width":"100%"});
        }
        else if ($scope.timeInMs == 2111111111111111111) {
            $("div#progressbarcustomize").css({"width":"0%"});

        }
        else{
            //$window.location.href = '/gameover/'+$scope.current_score;
        }
    };
    $timeout(countUp, 1000);

//handle
    $scope.returnTrue = function () {

        $scope.timeInMs = 0;
        $scope.Operation2numbers = ($scope.numb1 + $scope.numb2);
        if ($scope.Operation2numbers == $scope.numb3) {
            $scope.current_score ++;
            $scope.numb1 = generateARandomNumber(1,9);
            $scope.numb2 = generateARandomNumber(1,9);
            $scope.numb3 = generateARandomNumber3(1,18);
        }
        else
        {
            $window.location.href = '/gameover/'+$scope.current_score;
        }
    };
    //
    $scope.returnFalse = function () {
        $scope.timeInMs = 0;
        $scope.Operation2numbers = ($scope.numb1 + $scope.numb2);
        if($scope.Operation2numbers != $scope.numb3){
            $scope.current_score ++;
            $scope.numb1 = generateARandomNumber(1,9);
            $scope.numb2 = generateARandomNumber(1,9);
            $scope.numb3 = generateARandomNumber3(1,18);
        }
        else{
            $window.location.href = '/gameover/'+$scope.current_score;
        }
    };

});


playwithNumberApp.controller("gameoverController", function($scope, $window){

    $scope.playagain = function(){
        $window.location.href = '/inside'
    }
    var url = window.location;

    $scope.score = url.toString().split("/")[4];

    if($scope.score == "null"){
        $scope.score = 0
    }
    else
    {
        $scope.score = url.toString().split("/")[4];
    }

     $scope.savescore = function () {

         if($("#newUser").val() == ""){
             alert("Please enter your name !")
         }
         else{
             $.ajax({
                 type: "POST",
                 url: "/api/userlists/savescore.json",
                 data: { name: $("#newUser").val(), score: $("#score").val()},
                 success: function (e) {
                     alert("your score save successfully !");
                     $window.location.href = '/main';
                 },
                 error: function () {
                     alert("error . . . ");
                 }
             });
         }
     };

    $scope.sharefacebook = function(){
            alert("share")
    }

});
