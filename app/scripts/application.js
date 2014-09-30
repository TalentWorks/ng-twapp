'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc controller
 * @name  ApplicationCtrl
 * @description # Application controller
 */

angular.module('ng-twapp')
    .controller('ApplicationCtrl', function ($scope, $route, $location) {
      $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
      };
    });