'use strict';
/**
 * @ngdoc controller
 * @name ng-twapp.autocomplete.AutocompleteController
 * @description # AutocompleteController: this controller uses factory 'autocompleteService' to retrieve data from API
 */

angular.module('ng-twapp.autocomplete')
  .controller('AutocompleteController', ['$scope', 'autocompleteService', function ($scope, autocompleteService) {

    // For getting data from API
    $scope.getAutocompleteData = function (value) {

      return autocompleteService.getData(value)
        .then(function (data) {
          return data;
        });
    };

    // For static data
    $scope.states = ['Cricket', 'Hockey'];
    $scope.addToArray = function (value) {
      $scope.states.push(value);
      $scope.addText = '';

    };
  }]);
