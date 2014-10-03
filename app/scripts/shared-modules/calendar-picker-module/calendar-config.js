'use strict';
/**
 * @ngdoc module
 * @name mytmoNgApp
 * @file calendar-config.js
 * @description # mytmoNgApp calendar module loader
 */

angular.module('mytmoNgApp')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('cal', {
            url: '/cal',
            templateUrl: 'scripts/shared-modules/calendar-picker-module/views/calendar.html',
            controller: 'calendarPickerModuleController'
        });

        $urlRouterProvider.otherwise('/');
    });