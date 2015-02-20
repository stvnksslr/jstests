 angular.module('formExample', [])
     .controller('ExampleController', ['$scope', function($scope) {
         $scope.master = {};

         $scope.update = function(user) {
             $scope.master = angular.copy(user);
         };

         $scope.reset = function() {
             $scope.user = angular.copy($scope.master);
         };

         $scope.reset();
     }]);


 it('should toggle readonly attr', function() {
     expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeFalsy();
     element(by.model('checked')).click();
     expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeTruthy();
 });
