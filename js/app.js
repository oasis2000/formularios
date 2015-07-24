var validationApp = angular.module('validationApp', []);

validationApp.controller('miCtrl', function($scope) {

    $scope.submitForm = function(isValid) {

        if (isValid) {
            alert('Formulario valido');
        }

    };

});