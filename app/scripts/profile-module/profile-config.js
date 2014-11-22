'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc config
 * @name ng-twapp.config
 * @description # config for login
 */
angular.module('ng-twapp.profile', []).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    //$routeProvider.resolve
    // route to show our form (/form)
    .state('tabprofile', {
      url: '/tabprofile',
      templateUrl: '/scripts/profile-module/views/profile.html',
      controller: 'profileController'
    })

    // url will be /profile/page1
    .state('tabprofile.page1', {
      url: '/page1',
      templateUrl: '/scripts/profile-module/views/profile-page-one.html'
    })

    // url will be /profile/page2
    .state('tabprofile.page2', {
      url: '/page2',
      templateUrl: 'scripts/profile-module/views/profile-page-two.html'
    })

    // url will be /profile/page3
    .state('tabprofile.page3', {
      url: '/page3',
      templateUrl: '/scripts/profile-module/views/profile-page-three.html'
    })

    // url will be /profile/page4
    .state('tabprofile.page4', {
      url: '/page4',
      templateUrl: '/scripts/profile-module/views/profile-page-four.html'
    })

    // url will be /profile/submit
    .state('tabprofile.verify', {
      url: '/verify',
      templateUrl: '/scripts/profile-module/views/profile-verify.html'
    });

  // catch all route
  $urlRouterProvider.otherwise('/');
});
