'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc config
 * @name ng-twapp.config
 * @description # config for login
 */

angular.module('ng-twapp')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

        // route to show our basic form (/form)
          .state('profile', {
            url: '/profile',
            templateUrl: '/scripts/profile-module/views/profile.html',
            controller: 'profileController'
          })

        // url will be /profile/page1
          .state('profile.page1', {
            url: '/page1',
            templateUrl: '/scripts/profile-module/views/profile-page-one.html'
          })

        // url will be /profile/page2
          .state('profile.page2', {
            url: '/page2',
            templateUrl: 'scripts/profile-module/views/profile-page-two.html'
          })

        // url will be /profile/page3
          .state('profile.page3', {
            url: '/page3',
            templateUrl: '/scripts/profile-module/views/profile-page-three.html'
          })

        // url will be /profile/page4
          .state('profile.page4', {
            url: '/page4',
            templateUrl: '/scripts/profile-module/views/profile-page-four.html'
          })

        // url will be /profile/submit
          .state('profile.verify', {
            url: '/verify',
            templateUrl: '/scripts/profile-module/views/profile-verify.html'
          });

      // catch all route
      $urlRouterProvider.otherwise('/');
    });