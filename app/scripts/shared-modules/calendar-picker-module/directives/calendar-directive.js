'use strict';
/**
 * @ngdoc directive
 * @name ng-twapp.calendarDirective
 * @description # calendar picker directive
 */
angular.module('ng-twapp')
    .directive('calendarDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/shared-modules/calendar-picker-module/views/calandar.html'
        };
    });