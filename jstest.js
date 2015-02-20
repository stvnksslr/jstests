'use strict';

var formApp = angular.module('myModule', []).controller('MyFormCtrl', ['$scope', function($scope) {
    $scope.formData = {
        'firstname': 'steve',
        'lastname': 'kessler',
        'phonenumber': '123-4567',
        'email': 'stvnksslr@gmaial.com'
    };
    $scope.formOptions = {
        disableForm: true
    };
}]);

