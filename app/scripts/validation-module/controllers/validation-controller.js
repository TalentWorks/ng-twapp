'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.validation.ValidationController
 * @description # ValidationController
 */

angular.module('ng-twapp.validation')
  .controller('ValidationController', ['$scope', function ($scope) {
    // Default User value

    var UserData = {};
    UserData.userFirstName = 'Demo';
    UserData.userLastName = 'Test';
    UserData.email = 'demo@test.com';

    // Assign value to scope object
    $scope.customer = {};
    angular.copy(UserData, $scope.customer);

    // Update user details
    $scope.submitForm = function (validateFlag, formName) {
      if (validateFlag) {
        switch (formName) {
          case 'ngCustomer':
            UserData.userFirstName = $scope.customer.userFirstName;
            UserData.userLastName = $scope.customer.userLastName;
            break;
          case 'ngEmail':
            UserData.email = $scope.customer.email;
            break;
        }
        $scope[formName] = !$scope[formName];
      }
    };

    // When user cancel the update
    $scope.cancelViewData = function (formName) {
      switch (formName) {
        case 'ngCustomer':
          $scope.customer.userFirstName = UserData.userFirstName;
          $scope.customer.userLastName = UserData.userLastName;
          break;
        case 'ngEmail':
          $scope.customer.email = UserData.email;
          break;
      }
      $scope[formName] = !$scope[formName];
    };
  }]);
