'use strict';

angular.module('formApp', [])
    .controller('MyFormController', ['$scope', function($scope) {
        // wasnt sure the proper practice for this actually but this will push these values in
        // to form data, one fix i should probably make for this is having it load from defaultData on 
        // page load and then not to reference it. 
        $scope.formData = {
            'firstname': 'steve',
            'lastname': 'kessler',
            'phonenumber': '123-4567',
            'email': 'stvnksslr@gmail.com'
        };

        // Default data object used for replacing the fields back to there editible state when
        // toggled
        $scope.defaultData = {
            'firstname': 'steve',
            'lastname': 'kessler',
            'phonenumber': '123-4567',
            'email': 'stvnksslr@gmail.com'
        };

        // Control for whether a field will be editable
        $scope.formOptions = {
            disableForm: true
        };

        // loading the submit button as false so that it is not present at page load
        $scope.showSubmit = false;

    }])
    .controller('FormToggleController', ['$scope', function($scope) {

        $scope.toggleDisableForm = function() {
            // evaluating the boolean value for the disableForm to always be the opposte of 
            // its current status
            $scope.formOptions.disableForm = !($scope.formOptions.disableForm);
            //logic for enabling the fields when the fields are not editable and 
            //injecting the default data.
            if ($scope.formOptions.disableForm === true) {
                console.log('bing bool loop');
                $scope.formData = $scope.defaultData;
            } else {
                // eval to always show submit button when the fields are in an 
                // editable state.
                $scope.showSubmit = true;
            }

        };
    }])
    .directive('formToggle', [function() {
        return {
            restrict: 'E',
            scope: "=",
            controller: 'FormToggleController',
            // toggle directive html
            template: '<button ng-click="toggleDisableForm()"> Click here to lock/unlock fields </button>'
        };
    }]);
