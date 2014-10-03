'use strict';
/**
 * @ngdoc config
 * @name mytmoNgApp.commonFooterCtrl
 * @description # Common footer navigation configuration
 */

angular
    .module('mytmoNgApp')
    .config(function ($stateProvider, $urlRouterProvider) {

      $stateProvider

        // route to show our basic form (/form)
          .state('footer', {
            url: '/main',
            templateUrl: '/scripts/main-module/view/main.html',
            controller: 'commonFooterCtrl'
          })

        // url will be /main/contacts
          .state('footer.contact', {
            url: '/contact',
            templateUrl: '/scripts/main-module/view/main.html'
          });

      $urlRouterProvider.otherwise('/');
    });