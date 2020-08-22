var app = angular.module('loginApp', []);
app.controller('loginCtrl', function($scope) {
$scope.login= function(){
    if($scope.emailId=="test" && $scope.password=="test"){
            $scope.welcome= "Welcome Test, you have logged in successfully";
        }
    }
$scope.googleLogin=   function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }
      
});   