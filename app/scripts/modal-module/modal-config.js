'use strict';
/**
 * @ngdoc module
 * @name mytmoNgApp
 * @file nav-route-config.js
 * @description # mytmoNgApp nav-route-config.js main app module loader
 */

angular.module('mytmoNgApp')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('modalurl', {
            url: '/modalurl',
            templateUrl: 'scripts/modal-module/views/modal.html',
            controller: 'modalController'
        });

        $urlRouterProvider.otherwise('/');
    });