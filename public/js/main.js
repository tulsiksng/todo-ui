   var app = angular.module('myApp', []);
   app.controller('myCtrl', function($scope,$http) {
   $scope.items=[];
   $scope.addTask= function(keyEvent){
      if (keyEvent.which === 13){
      $scope.items.push($scope.task);
      $scope.task=null;}
   };
   $scope.getAllTask= function(){
      $http({
         method : "GET",
         url : "/todos"
         }).then(function mySuccess(response) {
               $scope.items= response.data;
         }, function myError(response) {
            $scope.myWelcome = "Error Fetching data";
         });
   }
   $scope.submitTask= function(){
      console.log("Submit task called");
      let dataObj=$scope.items;
      $http({
         headers: {
             'Content-Type': 'application/json; charset=utf-8'
        },
         method : "POST",
         url : "/todos",
         data: {todoList: dataObj}
         }).then(function mySuccess(response) {
            $scope.myWelcome = "Task submitted successfully";
         }, function myError(response) {
            $scope.myWelcome = "Error Submitting data";
         });
   }
   $scope.removeTask= function(item){
     // $scope.tasks.removeTask[0];
      for( let i = 0; i < $scope.items.length; i++){ 
         if ( $scope.items[i] === item) {
            $scope.items.splice(i, 1);
             i--; }
            }
   }

   });   


   var app = angular.module('myApp1', []);
   app.controller('myCtrl1', function($scope) {
   });   