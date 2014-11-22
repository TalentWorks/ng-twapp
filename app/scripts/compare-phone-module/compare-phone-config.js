'use strict';
/**
 * @ngdoc module
 * @name ng-twapp.comparePhone.config
 * @description # config for compare phone
 */
angular.module('ng-twapp.comparePhone', [])
  .config(function () {
  })
  .constant('COMPARE_CONSTANTS', {
    'MIN_PHONE_SELECT': 2,
    'MAX_PHONE_SELECT': 3,
    'COMPARE_PHONE_URL': '/scripts/compare-phone-module/services/compare-phone-data.json',
    'PHONE_DETAILS_URL': '/scripts/compare-phone-module/services/phone-details-data.json'
  });
