'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.comparePhone.comparePhoneService
 * @description # comparePhoneService
 */

angular.module('ng-twapp.comparePhone')
  .factory('comparePhoneService', function ($http, $q, COMPARE_CONSTANTS) {

    return {

      getPhoneDetailsData: function () {
        var deferred = $q.defer();
        $http.get(COMPARE_CONSTANTS.PHONE_DETAILS_URL)
          .success(function (response) {
            deferred.resolve(response);
          })
          .error(function () {
            deferred.reject();
          });
        return deferred.promise;
      },

      getCompareData: function (values) {
        var deferred = $q.defer();
        $http.get(COMPARE_CONSTANTS.COMPARE_PHONE_URL, {
          params: {
            phoneIds: values
          }
        })
          .success(function (response) {
            deferred.resolve(response);
          })
          .error(function () {
            deferred.reject();
          });
        return deferred.promise;
      }
    };

  });
