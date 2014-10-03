 'use strict';
/**
 * @ngdoc config
 * @name mytmoNgApp.pagination
 * @description  Pagination configuration
 */
angular.module('mytmoNgApp').config(function ($stateProvider, $urlRouterProvider) {
	    $stateProvider.state('pagination', {
            url: '/pagination',
            templateUrl: 'scripts/pagination-module/views/pagination-example.html',
            controller: 'PaginationExampleController'
        });

        $urlRouterProvider.otherwise('/');
});