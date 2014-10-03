'use strict';
/**
 * @ngdoc module
 * @name ng-twapp
 * @file nav-route-config.js
 * @description # ng-twapp nav-route-config.js main app module loader
 */

angular.module('ng-twapp')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('modalurl', {
            url: '/modalurl',
            templateUrl: 'scripts/modal-module/views/modal.html',
            controller: 'modalController'
        });

        $urlRouterProvider.otherwise('/');
    });