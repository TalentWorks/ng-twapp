 'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.infinite-scroll
 * @description  Infinite Scroll Example configuration
 */
angular.module('ng-twapp').config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('infinite-scroll', {
            url: '/infinite-scroll',
            templateUrl: 'scripts/infinite-scroll-module/views/infinite-scroll.html',
            controller: 'InfiniteScrollController'
        });

        $urlRouterProvider.otherwise('/');
});