'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.accordion.AccController
 * @description # AccController
 */

angular.module('ng-twapp.cart')
  .controller('CartController', function ($scope, ngCart, cartService, Pdl) {
    Pdl.processData($scope);
    $scope.data = ngCart;

    $scope.ngCart = ngCart;
    cartService.getCartData()
      .then(function (data) {
        $scope.products = data;
      });
  });
