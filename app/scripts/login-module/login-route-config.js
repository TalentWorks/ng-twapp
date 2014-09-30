'use strict';
/**
 * Created by josefsosa on 9/29/14.
 */

angular.module('ng-twapp')
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    // route to show our basic form (/form)
      .state('form', {
        url: '/form',
        templateUrl: '/scripts/login-module/views/form.html',
        controller: 'logingCtrl'
      })

    // url will be /form/login
      .state('form.login', {
        url: '/login',
        templateUrl: '/scripts/login-module/views/login.html'
      })

    // url will be /form/success
      .state('form.success', {
        url: '/success',
        templateUrl: '/scripts/login-module/views/loginSuccess.html'
      })

    // nested states
    // each of these sections will have their own view
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