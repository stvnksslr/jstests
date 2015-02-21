'use strict';

angular.module('formApp', [])
    .controller('MyFormController', ['$scope', function($scope) {
        $scope.formData = {
            'firstname': 'steve',
            'lastname': 'kessler',
            'phonenumber': '123-4567',
            'email': 'stvnksslr@gmail.com'
        };

        $scope.defaultData = {
            'firstname': 'steve',
            'lastname': 'kessler',
            'phonenumber': '123-4567',
            'email': 'stvnksslr@gmail.com'
        };

        $scope.formOptions = {
            disableForm: true
        };

        $scope.showSubmit = false;

    }])
    .controller('FormToggleController', ['$scope', function($scope) {

        $scope.toggleDisableForm = function() {
            $scope.formOptions.disableForm = !($scope.formOptions.disableForm);
            if ($scope.formOptions.disableForm === true) {
                console.log('bing bool loop');
                $scope.formData = $scope.defaultData;
            } else {
                $scope.showSubmit = true;
            }

        };
    }])
    .directive('formToggle', [function() {
        return {
            restrict: 'E',
            scope: "=",
            controller: 'FormToggleController',
            template: '<button ng-click="toggleDisableForm()"> Click here to lock/unlock fields </button>'
        };
    }]);
