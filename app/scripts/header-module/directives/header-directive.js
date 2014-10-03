'use strict';
/**
 * @ngdoc directive
 * @name mytmoNgApp.commonHeader
 * @description # Common Header navigation directive
 */
angular.module('mytmoNgApp')
    .directive('commonHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/header-module/views/header.html'
        };
    });