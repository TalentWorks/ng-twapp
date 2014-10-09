'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.commonHeader
 * @description # Common Header navigation directive
 */
angular.module('ng-twapp.header')
    .directive('commonHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/header-module/views/header.html'
        };
    });