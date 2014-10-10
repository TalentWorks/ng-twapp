'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name ng-twapp.commonFooterCtrl
 * @description # commonFooterCtrl
 */

angular.module('ng-twapp')
    .controller('mainCtrl', function ($scope) {
      var params = {userName:'John', userLast:'Smith'};

      this.userName = params.userName + " " + params.userLast;
      console.log(this.userName);

      this.userFName = params.userName;
      this.userLName = params.userLast;

      // function to process the form
      $scope.someAlert = function () {
        alert('Created User! ' + $scope.formData.name);
      };

    });