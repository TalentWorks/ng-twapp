 'use strict';
/**
 * @ngdoc config
 * @name ng-twapp.pagination
 * @description  Pagination configuration
 */
angular.module('ng-twapp').config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('pagination', {
            url: '/pagination',
            templateUrl: 'scripts/pagination-module/views/pagination-example.html',
            controller: 'PaginationExampleController'
        });

        $urlRouterProvider.otherwise('/');
});