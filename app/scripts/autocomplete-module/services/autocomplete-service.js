'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.accordion.accordionService
 * @description # accordionService: the getData method will return data based on 'value'
 */

angular.module('ng-twapp.autocomplete')
  .factory('autocompleteService', function ($http, $q, AUTOCOMPLETE_URL_CONSTS) {

    var autocompleteUrl = AUTOCOMPLETE_URL_CONSTS.AUTOCOMPLETE;
    return {
      getData: function (value) {
        var deferred = $q.defer();
        $http.get(autocompleteUrl, {
          params: {
            param: value,
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
