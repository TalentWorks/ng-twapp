'use strict';
/**
 * @ngdoc directive
 * @name mytmoNgApp.commonHeader
 * @description # Common Header navigation directive
 */
angular.module('mytmoNgApp')
    .directive('LoginDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/scripts/login-module/views/form.html'
        };
    });