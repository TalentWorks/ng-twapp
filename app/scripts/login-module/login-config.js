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
          .state('form', {
            url: '/form',
            templateUrl: '/scripts/login-module/views/form.html',
            controller: 'loginCtrl'
          })

        // url will be /form/login
          .state('form.signup', {
            url: '/signup',
            templateUrl: '/scripts/login-module/views/form-signup.html'
          })

        // url will be /form/success
          .state('form.success', {
            url: '/success',
            templateUrl: '/scripts/login-module/views/form-login-success.html'
          })

        // nested states
        // url will be nested (/form/profile)
          .state('form.profile', {
            url: '/profile',
            templateUrl: '/scripts/login-module/views/form-profile.html'
          })

        // url will be /form/interests
          .state('form.interests', {
            url: '/interests',
            templateUrl: '/scripts/login-module/views/form-interests.html'
          })

        // url will be /form/submit
          .state('form.verify', {
            url: '/verify',
            templateUrl: '/scripts/login-module/views/form-verify.html'
          });

      // catch all route
      // send users to the form page
      $urlRouterProvider.otherwise('/');
    });