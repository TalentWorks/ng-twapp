/**
 * Created by josefsosa on 9/29/14.
 */
angular.module('ng-twapp')
    .controller('mainCtrl', function ($scope) {

      // function to process the form
      $scope.someAlert = function() {
        alert('Created User! ' + $scope.formData.name);
      };

    });