/**
 * Created by josefsosa on 9/18/14.
 */

angular.module('ng-twapp')
.controller('logingCtrl', function (Facebook, $scope, $rootScope, $http, $location, Facebook) {
      // we will store all of our form data in this object
      $scope.formData = {};

      // function to process the form
      $scope.processForm = function() {
      

        alert('Created User! ' + $scope.formData.name);
      };

});