'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.footer.CommonFooterController
 * @description # Common footer navigation configuration
 */

angular.module('ng-twapp.footer', []).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    // route to show our basic form (/form)
    .state('footer', {
      url: '/main',
      templateUrl: '/scripts/main-module/view/main.html',
      controller: 'CommonFooterController'
    })

    // url will be /main/contacts
    .state('footer.contact', {
      url: '/contact',
      templateUrl: '/scripts/main-module/view/main.html'
    });

  $urlRouterProvider.otherwise('/');
});
