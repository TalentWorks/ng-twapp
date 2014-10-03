'use strict';
/**
 * @ngdoc module
 * @name ng-twapp
 * @file nav-route-config.js
 * @description # ng-twapp nav-route-config.js main app module loader
 */

angular.module('ng-twapp')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            url: '/',
            templateUrl: '/scripts/main-module/view/main.html',
            controller: 'mainController'
        });
        $stateProvider.state('about', {
            url: '/about',
            templateUrl: '/scripts/main-module/view/main.html',
            controller: 'mainController'
        });
        $stateProvider.state('contact', {
            url: '/contact',
            templateUrl: '/scripts/main-module/view/main.html',
            controller: 'mainController'
        });
        $urlRouterProvider.otherwise('/');
    });