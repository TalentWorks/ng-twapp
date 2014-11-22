'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name mytmoNgApp.commonFooterController
 * @description # commonFooterController
 */
angular.module('ng-twapp.main').controller('MainController', function ($scope, MainService) {
  var params = {userName: 'John', userLast: 'Smith'};

  $scope.userName = params.userName + ' ' + params.userLast;
  console.log($scope.userName);

  $scope.mainUserData = MainService.getData();

  // function to process the form
  $scope.someAlert = function () {
    //alert('Created User! ' + $scope.formData.name);
  };
});
