'use strict';
angular.module('ng-twapp.cart', [])
  .config([function () {

  }])
  .provider('$ngCart', function () {
    this.$get = function () {

    };
  })
  .run(['$rootScope', 'ngCart', 'NgCartItem', 'store',
    function ($rootScope, ngCart, ngCartItem, store) {
      $rootScope.$on('ngCart:change', function () {
        ngCart.$save();
      });
      if (angular.isObject(store.get('cart'))) {
        ngCart.$restore(store.get('cart'));
      } else {
        ngCart.init();
      }
    }
  ]);
