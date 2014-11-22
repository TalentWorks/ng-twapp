'use strict';
/**
 * @ngdoc module
 * @name ng-twapp.searchAndSelect
 * @description The module definition and configuration for ng-twapp.searchAndSelect.
 */
angular.module('ng-twapp.searchAndSelect', ['ui.select'])
  .config(function (uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
  });
