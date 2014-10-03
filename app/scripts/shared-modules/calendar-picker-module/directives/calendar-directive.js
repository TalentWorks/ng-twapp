'use strict';
/**
 * @ngdoc directive
 * @name mytmoNgApp.calendarDirective
 * @description # calendar picker directive
 */
angular.module('mytmoNgApp')
    .directive('calendarDirective', function () {
        return {
            restrict: 'E',
            templateUrl: 'scripts/shared-modules/calendar-picker-module/views/calandar.html'
        };
    });