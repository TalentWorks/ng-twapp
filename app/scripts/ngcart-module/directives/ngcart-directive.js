'use strict';
angular.module('ng-twapp.cart')
  .directive('addtocart', ['ngCart', function (ngCart) {
    return {
      restrict: 'E',
      scope: {
        id: '@',
        name: '@',
        quantity: '@',
        price: '@',
        data: '='
      },
      transclude: true,
      templateUrl: 'scripts/ngcart-module/views/addtocart.html',
      link: function (scope, element, attrs) {
        scope.attrs = attrs;
        scope.ngCart = ngCart;
        scope.inCart = function () {
          return ngCart.getItemById(attrs.id);
        };

      }
    };
  }])
  .directive('cart', ['ngCart', function (ngCart) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'scripts/ngcart-module/views/cart.html',
      link: function (scope) {
        scope.ngCart = ngCart;
      }
    };
  }])

  .directive('summary', ['ngCart', function (ngCart) {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      templateUrl: 'scripts/ngcart-module/views/summary.html',
      link: function (scope) {
        scope.ngCart = ngCart;
      }
    };
  }]);
