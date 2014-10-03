'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.commonFooterCtrl
 * @description # Common footer navigation configuration
 */

angular
    .module('ng-twapp')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider

        // route to show our basic footer
          .state('footer', {
            url: '/main',
            templateUrl: '/scripts/main-module/view/main.html',
            controller: 'commonFooterCtrl'
          })

        // url will be contacts
          .state('footer.contact', {
            url: '/contact',
            templateUrl: '/scripts/main-module/view/main.html'
          });

      $urlRouterProvider.otherwise('/');
    });