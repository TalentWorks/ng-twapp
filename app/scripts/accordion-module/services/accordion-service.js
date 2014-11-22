'use strict';
/**
 * @ngdoc service
 * @name ng-twapp.accordion.accordionService
 * @description # accordionService
 */

angular.module('ng-twapp.accordion')
  .factory('accordionService', function($http, $q, URL_CONSTS) {

    var url = URL_CONSTS.ACCORDION;
    return {
      getAccordionData: function() {
        var deferred = $q.defer();
        $http.get(url)
          .success(function(data) {
            deferred.resolve(data);
          })
          .error(function() {
            deferred.reject();
          });
        return deferred.promise;
      }
    };

  });
