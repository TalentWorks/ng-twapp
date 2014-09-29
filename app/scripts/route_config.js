/**
 * Created by josefsosa on 9/28/14.
 */
'use strict';

angular
    .module('ng-twapp')
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .when('/talent', {
            templateUrl: 'views/fbtalent.html',
            controller: 'MainCtrl'
          })
          .when('/fblogin', {
            templateUrl: '/scripts/login-module/views/loginView.html',
            controller: 'fbloginCtrl'
          })
          .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'SignUpCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
    }).config(function($stateProvider, $urlRouterProvider) {

      $stateProvider

        // route to show our basic form (/form)
          .state('form', {
            url: '/form',
            templateUrl: '/scripts/login-module/views/form.html',
            controller: 'logingCtrl'
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
      $urlRouterProvider.otherwise('/scripts/login-module/views/form/profile');
    });