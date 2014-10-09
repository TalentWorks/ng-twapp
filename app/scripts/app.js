'use strict';
/**
 * @author josefsosa on 9/18/14.
 * @ngdoc module
 * @name  ng-twapp
 * @description # ng-twapp main app module loader
 */

angular.module('ng-twapp', [
      'ngCookies',
      'ngResource',
      'ngSanitize',
      'ngRoute',
      'ngAnimate',
      'ui.router',
      'ui.bootstrap',
      'ng-infinite-scroll.js',
      //Custom application modules
      'ng-twapp.main'
//      'ng-twapp.inventory',
//      'ng-twapp.login',
//      'ng-twapp.infiniteScroller',
//      'ng-twapp.footer'

    ]);