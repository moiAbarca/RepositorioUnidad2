/**
 * Created by mOi on 02-05-16.
 */

//generar nuestro módulo
var app = angular.module('LoginFomrModule', []);
app.controller('LoginFormController',function ($scope, $http)
{
    //modelo, entidad generada para sustentar la vista
    $scope.formModel = {};

    //función que llama al submit
    $scope.onSubmit = function () {
      console.log("Llegué, Primer submit con angularJS!");
        console.log($scope.formModel);
        //más adelante haremos...
    };
});