 'use strict';
/**
 * @ngdoc config
 * @name mytmoNgApp.infinite-scroll
 * @description  Infinite Scroll Example configuration
 */
angular.module('mytmoNgApp').config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('infinite-scroll', {
            url: '/infinite-scroll',
            templateUrl: 'scripts/infinite-scroll-module/views/infinite-scroll.html',
            controller: 'InfiniteScrollController'
        });

        $urlRouterProvider.otherwise('/');
});