'use strict';
/**
 * @ngdoc module
 * @name ng-twapp
 * @file calendar-config.js
 * @description # ng-twapp calendar module loader
 */
angular.module('ng-twapp').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('cal', {
    url: '/cal',
    templateUrl: 'scripts/shared-modules/calendar-picker-module/views/calendar.html',
    controller: 'calendarPickerModuleController'
  });

  $urlRouterProvider.otherwise('/');
});
